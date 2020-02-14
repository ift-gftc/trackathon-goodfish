const BigNumber = require('bignumber.js');

module.exports.delay = function(ms) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms);
  })
}

module.exports.toRP = function(rp) {
  const a = new BigNumber(rp);
  return a.div(100).toFixed(2);
}

module.exports.alert = function(msg) {
  alert(msg);
}
