import * as dotenv from "dotenv";
import { task } from "hardhat/config";
import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import "hardhat-gas-reporter";
import "solidity-coverage";

// This adds support for typescript paths mappings
import "tsconfig-paths/register";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
