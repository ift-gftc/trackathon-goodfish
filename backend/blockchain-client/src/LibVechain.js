const connex = window.connex;

function getTokenBalance (addressContract, addressHolder) {
  const balanceOfABI = {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
      'name': 'balance',
      'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }
  // eslint-disable-next-line
  const balanceOfMethod = connex.thor.account(addressContract).method(balanceOfABI)
  return balanceOfMethod.call(addressHolder)
    .then(result=>{
      return evmToPrintable(result['decoded']['balance']);
    });

}

function getStoreValue () {
  // eslint-disable-next-line
  const getValueMethod = connex.thor.account(storeAddress).method(storeMethods[1])
  return getValueMethod.call()
    .then(result=>{
      return evmToPrintable(result['decoded']['0'],0,0);
    });
}

function setStoreValue(newValStr,signerAddress) {
  const newVal = Number(newValStr);
  // eslint-disable-next-line
  const setValueMethod = connex.thor.account(storeAddress).method(storeMethods[0]);
  const setValueClause = setValueMethod.asClause(newVal);
  // eslint-disable-next-line
  const signingService = connex.vendor.sign('tx');
  const comment = 'Set store value: ' + newVal;
  signingService
    .signer(signerAddress) // Enforce signer
    .comment(comment)

  return signingService.request([
    {
      comment: comment,
      ...setValueClause
    }
  ]);
}

function getFishesByOwner(address) {
  // eslint-disable-next-line
  const method = getTokenFishMethod('getFishesByOwner');
  const func = connex.thor.account(tokenFishAddress).method(method)
  return func.call(address)
    .then(result=>{
      const arr = result['decoded']['0'];
      let p = Promise.resolve();
      let ret = [];
      for(let i=0;i<arr.length;i++) {
        p = p.then(()=>{
          return getFishByID(arr[i]);
        })
        .then(fish=>{
          ret.push({codeName:fish,fishId:arr[i]});
        })
      }

      p = p.then(()=>{
        return ret;
      });

      return p;
    });
}

function getFishByID(id) {
  // eslint-disable-next-line
  const method = getTokenFishMethod('getFishByID');
  const func = connex.thor.account(tokenFishAddress).method(method)
  return func.call(id)
    .then(result=>{
      return result['decoded']['codeName'];
    });
}

function createFish(codeName,signerAddress) {
  // eslint-disable-next-line
  const method = getTokenFishMethod('createFish');
  const func = connex.thor.account(tokenFishAddress).method(method)
  const funcClause = func.asClause(codeName);

  // eslint-disable-next-line
  const signingService = connex.vendor.sign('tx');
  const comment = 'Create fish: ' + codeName;
  signingService
    .signer(signerAddress) // Enforce signer
    .comment(comment)

  return signingService.request([
    {
      comment: comment,
      ...funcClause
    }
  ]);
}

function simpleTransfer(to,tokenId,signerAddress) {
  // eslint-disable-next-line
  const method = getTokenFishMethod('simpleTransfer');
  const func = connex.thor.account(tokenFishAddress).method(method)
  const funcClause = func.asClause(to,tokenId);

  // eslint-disable-next-line
  const signingService = connex.vendor.sign('tx');
  const comment = 'Tranfer fish ' + tokenId + ' from ' + signerAddress + ' to ' + to;
  signingService
    .signer(signerAddress) // Enforce signer
    .comment(comment)

  return signingService.request([
    {
      comment: comment,
      ...funcClause
    }
  ]);
}


function getTokenFishMethod(name) {
  for(let i=0;i<tokenFishMethods.length;i++) {
    if(tokenFishMethods[i].name === name) {
      return tokenFishMethods[i];
    }
  }
}


export { getTokenBalance, getStoreValue, setStoreValue, getFishesByOwner, createFish, simpleTransfer };

const tokenFishAddress = '0x5e654909398aa87c7ea7ef7467de7ba0d7c52b10';
const tokenFishMethods = require('./fishToken.json');

const BigNumber = require('bignumber.js')
const DECIMALS = function (points) {
  return new BigNumber(10 ** points) // Decimals = 18 on VTHO and most contracts.
}

/**
 * Turn a string to big number.
 * @param {String} aString a number string.
 */
const makeBN = function (aString) {
  return BigNumber(aString)
}

/**
 * Turn a BigNumber into a printable string.
 * @param {BigNumer} aBigNumber A big number.
 * @param {Integer} dp An integer of percision, default is 2.
 */
const printBN = function (aBigNumber, dp = 2) {
  return aBigNumber.toFixed(dp)
}

/**
 * Turn an EVM big number into normal human understandable percision.
 * @param {BigNumber} aBigNumber An EVM big number.
 * @param {Number} decimals Percisions that EVM number has. Default is 18.
 */
const evmToHuman = function (aBigNumber, decimals = 18) {
  return aBigNumber.dividedBy(DECIMALS(decimals))
}

/**
 * Turn a human understandable number to an EVM Big number.
 * @param {String} aNumber A normal float/int from user input.
 * @param {Number} decimals Percisions that EVM number has. Default is 18.
 * @returns {String} String represented number.
 */
const humanToEVM = function (aNumber, decimals = 18) {
  const a = makeBN(aNumber)
  return a.multipliedBy(DECIMALS(decimals)).toString(10)
}

/**
 * Shortcut turing EVM big number string into human readable short format.
 * @param {String} aString String representing the EVM big number.
 * @param {Number} decimals Percisions that EVM number has. Default is 18.
 * @param {BigNumber} dp decimal points that result shall keep.
 */
const evmToPrintable = function (aString, decimals = 18, dp = 2) {
  const evmNumber = makeBN(aString)
  const humanNumber = evmToHuman(evmNumber, decimals)
  return printBN(humanNumber, dp)
}


