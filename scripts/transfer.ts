// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, getNamedAccounts } from "hardhat";

async function main() {
  const recipient = '0x48D42790a5280c25fdc0aA98154D5dbAC518007d';
  const amount = 6;
  const { deployer } = await getNamedAccounts();

  // We get the contract deployed
  const tokenContract = await ethers.getContract("MyErc20Token");
  const receipt = await tokenContract.transfer(recipient, amount);
  const symbol = await tokenContract.symbol();

  console.log(`Transfer executed, sent ${amount} ${symbol} \nfrom: ${deployer} to ${recipient}\ncheck the tx hash`, receipt.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
