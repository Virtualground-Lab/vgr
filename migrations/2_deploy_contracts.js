const VGRCrowdsale = artifacts.require("VGRCrowdsale");
var Web3 = require("web3");

module.exports = function async(deployer, wallet) {
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  var BN = web3.utils.BN;

  const initialRate = 1000;
  const endRate = 900;
  const preferentialRate = 2000;

  let startBlock = web3.eth.blockNumber + 10;
  let endBlock = web3.eth.blockNumber + 20;

  deployer.deploy(
    VGRCrowdsale,
    startBlock,
    endBlock,
    initialRate,
    endRate,
    preferentialRate,
    wallet
  );
};
