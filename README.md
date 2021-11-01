# Create your own coin (ERC20)

- This is a basic project to explain how to deploy and transfer your own coin
- This project is used to demonstrate in practice how to use a blockchain, with the following steps
  - Update the contract `contracts/MyErc20Token`
  - Deploy this contract
  - Check the contract in blockchain explorer
  - Execute transactions in the contract through scripts and metamask

### [BRL](https://github.com/RafilxTenfen/create-your-coin/blob/main/README.brl.md)
- For portugues, take a look at the file `README.brl.md` instructions

## Requirements
- There are some required programs
- [Node v16.9.1](https://nodejs.org/en/blog/release/v16.9.1/)
  - If you use Linux, just type the following command line in console to install node
  ```shell
  $~ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  $~ sudo apt install nodejs
  ```
- [npm v7.21.1](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [git](https://github.com/git-guides/install-git)
- [Chrome](https://www.google.com/chrome/)
> To check the installed versions, use `node -v ; npm -v`


## Metamask
- Open any browser compatible with chrome extensions (Chrome, Brave)
- Install [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
- Create your wallet

## Clone the repository
- Do the git clone
```shell
$~ git clone https://github.com/RafilxTenfen/create-your-coin.git
```
- Enter directory
```shell
$~ cd create-your-coin/
```

## Environment variables
- To carry out all the steps of this project, some environment variables are needed.
- Start by copying the file `.env.example` to `.env`
```shell
## Unix
$~ cp .env.example .env
## Windows
$~ copy .env.example .env
```

#### ETHERSCAN_API_KEY
- This environment variable is used to check contracts through `hardhat` package scripts
- To acquire the environment variable `ETHERSCAN_API_KEY`
- [Access etherscan](https://etherscan.io/login)
- Register and/or login
- After entering, click on [API-KEYs](https://etherscan.io/myapikey)
- Add a new key by clicking the add button
![addKey](https://i.imgur.com/WCXMrX0.png)
- Copy the created key and replace it in the copied file `.env` in the key `ETHERSCAN_API_KEY`

#### ROPSTEN_URL
- This environment variable is used to connect to a node of the Ethereum test blockchain network, called [Ropsten](https://ropsten.etherscan.io/) and so be able to send transactions through these nodes
- Let's use [Infura](https://infura.io/)
- Perform the [login](https://infura.io/login)
- Click in [ETHEREUM](https://infura.io/dashboard/ethereum)
![](https://i.imgur.com/KWnGPDL.png)
- Click on the first project if you have it, if not click on CREATE NEW PROJECT
![](https://i.imgur.com/9Zi0bNk.png)
- Click in SETTINGS
- Select Ropsten in the field ENDPOINTS
- Copy the Ropsten URL *HTTPS*
![](https://i.imgur.com/8BUBnlM.png)
- Replace in file `.env` the key `ROPSTEN_URL`

#### PRIVATE_KEY
- The environment variable `PRIVATE_KEY` is your wallet's private key, which is used to sign your transactions on the blockchain
- Go to the metamask extension
> It is not necessary to select the Ropsten network
- Click in the ellipsis("...")
![](https://i.imgur.com/mCZCCFu.png)
- Click in Account Details
- Click in Export Private Key
![](https://i.imgur.com/Zq4VgOC.png)
- Type your password
- Copy your private key
- Replace in file `.env` the key `PRIVATE_KEY`

#### [Adicione ETH](https://faucet.ropsten.be/)
- To be able to carry out transactions it is necessary to pay fees on the blockchain network
- In the main chain it is certainly expensive to carry out transactions
- On the ropsten test network you can purchase for free to perform xD tests
- In test networks, the funds are called faucet, in the case of the ropsten's network [click here](https://faucet.ropsten.be/)
- Copy your Metamask address
![](https://i.imgur.com/RSxAQDM.png)
- Enter your network address (can be copied into metamask extension) Paste your address in the field and click on `Send me test Ether`
![](https://i.imgur.com/vtO9oSz.png)
- Wait a few moments (about 2 minutes)
- Select the Ropsten network in your metamask extension
![](https://i.imgur.com/a1IB1mp.png)
- Check your balance, it should be something around `0.3 Ether`, which will be more than enough for our tests.
![](https://i.imgur.com/KViAZa9.png)

## Install the packages
- We are going to use several packages, so run the following command to install
```shell
$~ npm install
```

## Smartcontract
- Go to the `contracts/MyErc20Token.sol` file on line 8 and enter in the first parameter the name of your currency, and in the second parameter the symbol of your currency
  - Use a maximum of 15 characters for the first parameter (currency name)
  - Use a maximum of 5 characters for the second parameter (currency symbol)

- Compile the contract with the following command
```shell
$~ npm run compile
```
- Deploy the contract
```shell
$~ npm run deploy
```

- Check the contract
```shell
$~ npm run verify
```
__Expected result__
![](https://i.imgur.com/VXxLOe1.png)

- You can access and verify your contract in ropsten explorer https://ropsten.etherscan.io/address/0x15798879739613A0eF95bb8831F155a32d1437D7
> Replace the address with your contract address

- Copy your contract address and add your token to the Metamask extension
- Open the metamask extension and click Import Token
![](https://i.imgur.com/0C2MdMT.png)
- Paste your token address in Token Contract Address click Add Custom Token
![](https://i.imgur.com/cFg0h85.png)
- Then click import tokens
- If everything is ok, the Metamask must complete the other fields
