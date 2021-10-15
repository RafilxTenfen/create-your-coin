import { HardhatRuntimeEnvironment } from 'hardhat/types'; // This adds the type from hardhat runtime environment.
import { DeployFunction } from 'hardhat-deploy/types'; // This adds the type that a deploy function is expected to fulfill.

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { // the deploy function receives the hardhat runtime env as an argument
  const {deployments, getNamedAccounts} = hre; // we get the deployments and getNamedAccounts which are provided by hardhat-deploy.
  const { deploy } = deployments; // The deployments field itself contains the deploy function.

  const { deployer } = await getNamedAccounts(); // Fetch the accounts. These can be configured in hardhat.config.ts as explained above.
  const initialSupply = 50000000000000000000; // value in wei

  await deploy('MyErc20Token', { // This will create a deployment called 'Token'. By default it will look for an artifact with the same name. The 'contract' option allows you to use a different artifact.
    from: deployer, // Deployer will be performing the deployment transaction.
    args: [initialSupply], // is the first argument to the Token contract's constructor.
    log: true, // Display the address and gas used in the console (not when run in test though).
  });

};
export default func;
func.tags = ['MyErc20Token']; // This sets up a tag so you can execute the script on its own (and its dependencies).

