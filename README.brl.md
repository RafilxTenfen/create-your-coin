# Crie a sua própria moeda (ERC20)

- Esse projeto é utilizado para demonstrar na prática como utilizar uma blockchain, com os seguintes passos
  - Alterar o contrato `contracts/MyErc20Token`
  - Fazer o deploy desse contrato
  - Verificar o contrato no explorer da blockchain
  - Executar transações no contrato através de scripts e metamask

## Requisitos
- Existem alguns programas necessários
- [Node](https://nodejs.org/en/blog/release/v16.11.1/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [git](https://github.com/git-guides/install-git)
- [Chrome](https://www.google.com/chrome/)

## Metamask
- Instale [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
- Crie sua carteira

## Clone o repositório
- Realize o git clone
```shell
$~ git clone https://github.com/RafilxTenfen/create-your-coin.git
```

## Variáveis de ambiente
- Para realizar todos os passos desse projeto, é necessário algumas variáveis de ambiente
- Inicie copiando o arquivo `.env.example` para `.env`
```shell
$~ cp .env.example .env
```

#### ETHERSCAN_API_KEY
- Essa variável de ambiente é utilizada para verificar os contratos através dos scripts do pacote `hardhat`
- Para adiquirir a variável de ambiente `ETHERSCAN_API_KEY`
- [Acesse etherscan](https://etherscan.io/login)
- Faça o seu login e/ou cadastre-se
- Após entrar, clique em [API-KEYs](https://etherscan.io/myapikey)
- Adicione uma nova chave clicando no botão de adicionar
![addKey](https://i.imgur.com/WCXMrX0.png)
- Copie a chave criada e substitua no arquivo copiado `.env` na chave `ETHERSCAN_API_KEY`

#### ROPSTEN_URL
- Essa variável de ambiente é utilizada para se conectar a um node da rede de blockchain de testes do ethereum, chamada de [Ropsten](https://ropsten.etherscan.io/) e assim poder enviar transações através desses nodes
- Vamos utilizar [Infura](https://infura.io/)
- Realize o [login](https://infura.io/login)
- Clique em [ETHEREUM](https://infura.io/dashboard/ethereum)
![](https://i.imgur.com/KWnGPDL.png)
- Clique no primeiro projeto se você tiver, caso não tenha clique em CREATE NEW PROJECT
![](https://i.imgur.com/9Zi0bNk.png)
- Clique em SETTINGS
- Selecione Ropsten no campo ENDPOINTS
- Copie a Ropsten URL
![](https://i.imgur.com/8BUBnlM.png)
- Substitua a chave no arquivo `.env` na chave `ROPSTEN_URL`

#### PRIVATE_KEY
- A variável de ambiente `PRIVATE_KEY` é a chave privada da sua carteira, que é utilizada para assinar as suas transações na blockchain
- Vá até a extensão metamask
- Clique nos três pontos
![](https://i.imgur.com/mCZCCFu.png)
- Clique em Account Details
- Clique em Export Private Key
![](https://i.imgur.com/kyA0kEA.png)
- Informe sua senha
- Copie sua chave privada
- Substitua a chave privada no arquivo `.env` na chave `PRIVATE_KEY`

#### [Adicione ETH](https://faucet.ropsten.be/)
- Para conseguir realizar transações é necessário pagar taxas na rede blockchain
- Na main chain é certamente caro realizar transações
- Na rede de teste ropsten é possível adquirir de graça para realizar testes xD
- Nas redes de testes os fundos são chamados de faucet, no caso da rede ropsten [clique aqui](https://faucet.ropsten.be/)
- Informe seu endereço da rede (pode ser copiado na extensão metamask)

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
