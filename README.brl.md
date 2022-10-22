# Crie a sua própria moeda (ERC20)

- Esse projeto é utilizado para demonstrar na prática como utilizar uma blockchain, com os seguintes passos
  - Alterar o contrato `contracts/MyErc20Token`
  - Fazer o deploy desse contrato
  - Verificar o contrato no explorer da blockchain
  - Executar transações no contrato através de scripts e metamask

## Requisitos

- Existem alguns programas necessários
- [Node v16.9.1](https://nodejs.org/en/blog/release/v16.9.1/)
  - Se você utiliza linux, pode utilizar a seguinte linha de comando para instalar o node

  ```shell
  $~ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  $~ sudo apt install nodejs
  ```

- [npm v7.21.1](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [git](https://github.com/git-guides/install-git)
- [Chrome](https://www.google.com/chrome/)

> Para verificar as versões instaladas, utilize `node -v ; npm -v`

## Metamask

- Entre em algum browser compatível com as extensões do chrome (Chrome, Brave)
- Instale [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
- Crie sua carteira

## Clone o repositório

- Realize o git clone

```shell
$~ git clone https://github.com/RafilxTenfen/create-your-coin.git
```

- Entre no diretório

```shell
$~ cd create-your-coin/
```

## Variáveis de ambiente

- Para realizar todos os passos desse projeto, é necessário algumas variáveis de ambiente
- Inicie copiando o arquivo `.env.example` para `.env`

```shell
## Unix
$~ cp .env.example .env
## Windows
$~ copy .env.example .env
```

### ETHERSCAN_API_KEY

- Essa variável de ambiente é utilizada para verificar os contratos através dos scripts do pacote `hardhat`
- Para adquirir a variável de ambiente `ETHERSCAN_API_KEY`
- [Acesse etherscan](https://etherscan.io/login)
- Faça o seu login e/ou cadastre-se
- Após entrar, clique em [API-KEYs](https://etherscan.io/myapikey)
- Adicione uma nova chave clicando no botão de adicionar
![addKey](https://i.imgur.com/WCXMrX0.png)
- Copie a chave criada e substitua no arquivo copiado `.env` na chave `ETHERSCAN_API_KEY`

### GOERLI_URL

- Essa variável de ambiente é utilizada para se conectar a um node da rede de blockchain de testes do ethereum, chamada de [Goerli](https://goerli.etherscan.io/) e assim poder enviar transações através desses nodes
- Vamos utilizar [Infura](https://infura.io/)
- Realize o [login](https://infura.io/login)
- Crie uma nova chave
![image](https://user-images.githubusercontent.com/17556614/197309690-d1330ffa-64d2-42f4-8b4b-5d3fb798a61e.png)
- Clique em "MANAGE KEY"
![image](https://user-images.githubusercontent.com/17556614/197309721-9624934e-5f20-44bd-9b12-3ca8dac32671.png)
- Clique em Goerli
![image](https://user-images.githubusercontent.com/17556614/197309755-f096cb77-f9a1-47d5-925a-befe4a22f0b0.png)
- Copie a URL
![image](https://user-images.githubusercontent.com/17556614/197309801-896df0c2-e3de-4809-adea-2bdfb6af0f7f.png)
- Substitua a chave no arquivo `.env` na chave `GOERLI_URL`

#### PRIVATE_KEY

- A variável de ambiente `PRIVATE_KEY` é a chave privada da sua carteira, que é utilizada para assinar as suas transações na blockchain
- Vá até a extensão metamask

> Não é necessário selecionar a Goerli network

- Clique nos três pontos
![click three dots](https://i.imgur.com/mCZCCFu.png)
- Clique em Account Details
- Clique em Export Private Key
![click export key](https://i.imgur.com/Zq4VgOC.png)
- Informe sua senha

> O metamask pode ser um pouco lento, digite devagar para garantir

- Copie sua chave privada
- Substitua a chave privada no arquivo `.env` na chave `PRIVATE_KEY`

### [Adicione ETH](https://goerlifaucet.com/)

- Para conseguir realizar transações é necessário pagar taxas na rede blockchain
- Na main chain é certamente caro realizar transações
- Na rede de teste goerli é possível adquirir de graça para realizar testes xD
- Nas redes de testes os fundos são chamados de faucet, no caso da rede goerli [clique aqui](https://goerlifaucet.com/)
- Copie seu endereço do metamask
![image](https://user-images.githubusercontent.com/17556614/197309887-2a4e3b89-aa6e-4080-8ab4-fd37268b6111.png)
- Faça login se necessário
- Informe seu endereço da rede (pode ser copiado na extensão metamask) Cole seu endereço no campo e clique em `Send Me ETH`
![image](https://user-images.githubusercontent.com/17556614/197309949-3718bbd8-30ab-4a33-815b-deb322dc661c.png)
- Aguarde alguns instantes (cerca de 2 minutos)
- Selecione a rede Goerli na sua extensão do metamask
![image](https://user-images.githubusercontent.com/17556614/197309985-06f6e0eb-d869-4aed-a4f9-a80c4e46625b.png)
- Verifique seu saldo, ele deve ser algo em torno de `0.1 Ether`, que ja será mais do que suficiente para nossos testes

## Instale os pacotes

- Vamos utilizar vários pacotes, então execute o seguinte comando para instalar

```shell
$~ npm install
```

## Smartcontract

- Vá até o arquivo `contracts/MyErc20Token.sol` linha 8 e informe no primeiro parâmetro o nome da sua moeda, e no segundo parâmetro o simbolo da sua moeda
  - Utilize no máximo 15 caracteres para o primeiro parâmetro (nome da moeda)
  - Utilize no máximo 5 caracteres para o segundo parâmetro (símbolo da moeda)

- Compile o contrato com o seguinte comando

```shell
$~ npm run compile
```

- Faça o deploy do contrato

```shell
$~ npm run deploy
```

> __Resultado Esperado__

```shell
> create-your-coin@1.0.0 deploy
> npx hardhat --network goerli deploy

Nothing to compile
deploying "MyErc20Token" (tx: 0x54a295b51ab9ed1fe408412dd5c2b16eeb054f84bd9f82586ccc3c0aa76e48d2)...: deployed at 0x7CAF951a8DD71a925c125F70183406bd1E1B5F09 with 1221304 gas
```

- Verifique o contrato

```shell
$~ npm run verify
```

```shell
> create-your-coin@1.0.0 verify
> npx hardhat --network goerli etherscan-verify

verifying MyErc20Token (0x7CAF951a8DD71a925c125F70183406bd1E1B5F09) ...
waiting for result...
 => contract MyErc20Token is now verified
```

- Você pode acessar e verificar seu contrato no [goerli explorer](https://goerli.etherscan.io/address/0x7CAF951a8DD71a925c125F70183406bd1E1B5F09)

> Substitua o endereço pelo seu endereço do contrato

- Copie o endereço do seu contrato e adicione o seu token para a extensão metamask
- Abra a extensão do metamask e clique em Import Token
![import token](https://i.imgur.com/0C2MdMT.png)
- Cole o endereço do seu token em Token Contract Address clique em Add Custom Token
![paste addr](https://i.imgur.com/cFg0h85.png)
- Em seguida clique em importar tokens
- Se tudo occureu bem, o metamask deve completar os demais campos

## Frontend

- Olhe em `front-end/README.md`
