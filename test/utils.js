const BigNumber = web3.BigNumber;

const should = require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-bignumber")(BigNumber))
  .should();

function rpcCall(call) {
  const payload = Object.assign(
    {},
    {
      jsonrpc: "2.0",
      id: Date.now(),
    },
    call
  );
  return new Promise((resolve, reject) => {
    web3.currentProvider.sendAsync(payload, (err, res) => {
      return err ? reject(err) : resolve(res);
    });
  });
}

export function advanceBlock() {
  return rpcCall({ method: "evm_mine" });
}

export function increaseTime(seconds) {
  return rpcCall({ method: "evm_increaseTime", params: [+seconds] });
}
// Advances the block number so that the last mined block is `number`.
export async function advanceToBlock(number) {
  if (web3.eth.blockNumber > number) {
    throw Error(
      `block number ${number} is in the past (current is ${web3.eth.blockNumber})`
    );
  }
  while (web3.eth.blockNumber < number) {
    await advanceBlock();
  }
}
export async function advanceToTime(timestamp) {
  const block = await web3.eth.getBlock("latest");
  if (block.timestamp > timestamp) {
    throw Error(
      `time ${timestamp} is in the past (current is ${block.timestamp})`
    );
  }
  await advanceTime(timestamp - block.timestamp);
}
export async function advanceTime(time) {
  await increaseTime(time);
  await advanceBlock();
}
export function ether(n) {
  return new web3.BigNumber(web3.toWei(n, "ether"));
}
export const EVMThrow = "invalid opcode";
export const EVMRevert = "revert";
