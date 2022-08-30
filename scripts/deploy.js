const initialRate = 1000;
const endRate = 900;
const preferentialRate = 2000;
const wallet = "0x90958D4531258ca11D18396d4174a007edBc2b42";

async function main() {
  let startBlock = (await ethers.provider.getBlockNumber()) + 10;
  let endBlock = (await ethers.provider.getBlockNumber()) + 20;

  const VGR = await hre.ethers.getContractFactory("VGRCrowdsale");
  const vgr = await VGR.deploy(
    startBlock,
    endBlock,
    initialRate,
    endRate,
    preferentialRate,
    wallet
  );

  await vgr.deployed();

  console.log("VGR:", vgr.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
