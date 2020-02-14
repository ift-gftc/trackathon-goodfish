const Framework = require('@vechain/connex-framework').Framework;
const CN = require('@vechain/connex.driver-nodejs');
const Driver = CN.Driver;
const SimpleNet = CN.SimpleNet;
const SimpleWallet = CN.SimpleWallet;

//const wallet = new SimpleWallet();
//wallet.import('immune dawn very sign seat ugly miracle frost prepare brave diary donor');

module.exports.getConnect = function() {
  return Driver.connect(new SimpleNet('https://sync-testnet.vechain.org/'))
  .then(driver=>{
    const connex = new Framework(driver);
    return connex;
  });
}


