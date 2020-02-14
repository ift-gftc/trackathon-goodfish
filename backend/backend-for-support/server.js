const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('/ip4/127.0.0.1/tcp/5001');

const multer = require('multer');
const cors = require('cors');

const parseString = require('xml2js').parseString;
const JsonFind = require('json-find');
const formatXML = require('xml-formatter');

const connect = require('./connect');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.set('view engine', 'ejs');
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
});

const upload = multer({ storage: storage }).single('file');

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/upload', upload,(req, res) => {
  const f = req.file;
  fs.readFile(f.path, function read(err, data) {
    if (err) {
      throw err;
    }
    const content = ipfsClient.Buffer.from(data);
    ipfs.add(content)
      .then(result=>{
        res.json(result);
      });
  });
});

app.get('/getfile/:path', (req, res) => {
  const path = req.params.path
  ipfs.cat(path, (err, result) => {
    const xml = result.toString('utf8');
    const options = {indentation: ' ', stripComments: true, collapseContent: true, lineSeparator: '\n'};
    const xml2 = formatXML(xml, options);
    const xml3 = xml2.replace(/[\r\n]{2,}/g, "\n");
    getPos(xml)
    .then(result=>{
      res.render('index', { json:xml3 })
    });
    
  });
})

app.get('/getfish/:fishId', (req, res) => {
  const fishId = req.params.fishId;
  getFishByID(app.connex,fishId)
  .then(path=>{
    ipfs.cat(path, (err, result) => {
      const xml = result.toString('utf8');
      const options = {indentation: ' ', stripComments: true, collapseContent: true, lineSeparator: '\n'};
      const xml2 = formatXML(xml, options);
      const xml3 = xml2.replace(/[\r\n]{2,}/g, "\n");
      getPos(xml)
      .then(result=>{
        console.log(result);
        let species = result.epcClass;

        if( species.length > 6 ) {
          species = species.substr(species.length - 6);
        }

        const iconOk = '<span class="icon has-text-success"><i class="fas fa-check-square"></i></span>';
        const iconNotOk = '<span class="icon has-text-warning"><i class="fas fa-exclamation-triangle"></i></span>';

        const fishingGearTypeCode = result.fishingGearTypeCode;
        let icon2 = iconOk;
        if(fishingGearTypeCode === 'PS') icon2 = iconNotOk;
        let icon3 = iconOk;
        if(species === 'BSH123') icon3 = iconNotOk;
        let icon4 = iconOk;

        res.render('index', { json:xml3,
          lat:result.lat,lng:result.lng,
          fishingGearTypeCode:result.fishingGearTypeCode,
          epcClass:species,
          productOwner:result.productOwner,
          icon2:icon2,
          icon3:icon3,
          icon4:icon4,
         })
      });      
    });
  })
})

function getPos(xml) {
  return new Promise((resolve,reject)=>{
    parseString(xml, function (err, result) {
      const json = result;
      const doc = JsonFind(result);
      let pos = doc.checkKey('readPoint')[0]['id'][0];
      pos = pos.replace('geo:','');
      pos = pos.split('"').join('');
      pos = pos.split(',');
      const lat = pos[0];
      const lng = pos[1];
      const fishingGearTypeCode = doc.checkKey('fishingGearTypeCode')[0];
      const epcClass = doc.checkKey('epcClass')[0];
      const productOwner = doc.checkKey('gdst:productOwner')[0];
      resolve({lat:lat,lng:lng,json:json,fishingGearTypeCode,epcClass,productOwner});
    });
  })
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  connect.getConnect()
  .then(result=>{
    app.connex = result;
    console.log('connex initialized');
  });
})

const tokenFishAddress = '0x5e654909398aa87c7ea7ef7467de7ba0d7c52b10';
const tokenFishMethods = require('./fishToken.json');

function getFishByID(connex,id) {
  // eslint-disable-next-line
  const method = getTokenFishMethod('getFishByID');
  const func = connex.thor.account(tokenFishAddress).method(method)
  return func.call(id)
    .then(result=>{
      return result['decoded']['codeName'];
    });
}

function getTokenFishMethod(name) {
  for(let i=0;i<tokenFishMethods.length;i++) {
    if(tokenFishMethods[i].name === name) {
      return tokenFishMethods[i];
    }
  }
}


