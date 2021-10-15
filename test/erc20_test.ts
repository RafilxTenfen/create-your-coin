import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "./chai-setup";

describe("Token", function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("should deploy the ERC20 contract and check the initialSupply", async function () {
    const erc20Factory = await ethers.getContractFactory("MyErc20Token");
    const initialSupply = 1000;
    const erc20Contract = await erc20Factory.deploy(initialSupply);
    const contractTotalSupply = await erc20Contract.totalSupply();
    expect(contractTotalSupply).to.eq(initialSupply);
  });
});