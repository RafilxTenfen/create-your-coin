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

#### ETHERSCAN_API_KEY
- Essa variável de ambiente é utilizada para verificar os contratos através dos scripts do pacote `hardhat`
- Para adquirir a variável de ambiente `ETHERSCAN_API_KEY`
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
- Copie a Ropsten URL *HTTPS*
![](https://i.imgur.com/8BUBnlM.png)
- Substitua a chave no arquivo `.env` na chave `ROPSTEN_URL`

#### PRIVATE_KEY
- A variável de ambiente `PRIVATE_KEY` é a chave privada da sua carteira, que é utilizada para assinar as suas transações na blockchain
- Vá até a extensão metamask
> Não é necessário selecionar a Ropsten network
- Clique nos três pontos
![](https://i.imgur.com/mCZCCFu.png)
- Clique em Account Details
- Clique em Export Private Key
![](https://i.imgur.com/Zq4VgOC.png)
- Informe sua senha
> O metamask pode ser um pouco lento, digite devagar para garantir
- Copie sua chave privada
- Substitua a chave privada no arquivo `.env` na chave `PRIVATE_KEY`

#### [Adicione ETH](https://faucet.ropsten.be/)
- Para conseguir realizar transações é necessário pagar taxas na rede blockchain
- Na main chain é certamente caro realizar transações
- Na rede de teste ropsten é possível adquirir de graça para realizar testes xD
- Nas redes de testes os fundos são chamados de faucet, no caso da rede ropsten [clique aqui](https://faucet.ropsten.be/)
- Copie seu endereço do metamask
![](https://i.imgur.com/RSxAQDM.png)
- Informe seu endereço da rede (pode ser copiado na extensão metamask) Cole seu endereço no campo e clique em `Send me test Ether`
![](https://i.imgur.com/vtO9oSz.png)
- Aguarde alguns instantes (cerca de 2 minutos)
- Selecione a rede Ropsten na sua extensão do metamask
![](https://i.imgur.com/a1IB1mp.png)
- Verifique seu saldo, ele deve ser algo em torno de `0.3 Ether`, que ja será mais do que suficiente para nossos testes
![](https://i.imgur.com/KViAZa9.png)

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

- Verifique o contrato
```shell
$~ npm run verify
```
__Resultado esperado__
![](https://i.imgur.com/VXxLOe1.png)

- Você pode acessar e verificar seu contrato no ropsten explorer https://ropsten.etherscan.io/address/0x15798879739613A0eF95bb8831F155a32d1437D7
> Substitua o endereço pelo seu endereço do contrato

- Copie o endereço do seu contrato e adicione o seu token para a extensão metamask
- Abra a extensão do metamask e clique em Import Token
![](https://i.imgur.com/0C2MdMT.png)
- Cole o endereço do seu token em Token Contract Address clique em Add Custom Token
![](https://i.imgur.com/cFg0h85.png)
- Em seguida clique em importar tokens
- Se tudo occureu bem, o metamask deve completar os demais campos
