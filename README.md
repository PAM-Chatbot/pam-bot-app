# ProjetoTCC

Olá tudo bem ? 

Para iniciar o projeto siga os seguintes passos: 

## Instalação

Antes de rodar o projeto, é preciso instalar ou checar em sua máquina se contém os seguintes requisitos, caso contenha todos, você pode pular esta etapa: 

### Windows

Baixe e instale os requisitos abaixo:

* [Java SE](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Python](https://www.python.org/downloads/release/python-2717/)
* [Node](https://nodejs.org/en/) - (Baixe a versão recomendada)
* [AndroidStudio](https://developer.android.com/studio) - (Sim, isso mesmo é para instalar esse sugador de memória RAM)

Depois disso, abra o [AndroidStudio](https://developer.android.com/studio), e procure a opção SDK Manager, instale a versão do android que você utilizará para rodar o app, e instale.

Calma que já esta acabando...

Para finalizar precisamos configurar as variaveis de ambiente, acesse o iniciar do windows, e digite "variaveis de ambiente", e localize a opção "variaveis de ambiente", verifique se você já tem as variaveis JAVA_HOME e Path, caso não tenha criei ambas, para JAVA_HOME adicione o valor da variável, apontando para o seu JDK do Java, exemplo: "C:\Program Files\Java\jdk1.8.0_121", e para Path, apenas adiciona mais um caminho, agora apontando para o seu SDK exemplo "C:\Users\CAIQUERA\AppData\Local\Android\sdk\platform-tools",  

### MAC OS

Antes de rodar o projeto, é preciso instalar ou checar em sua máquina se contém os seguintes requisitos, caso contenha todos, você pode pular esta etapa: 

* [Xcode](https://developer.apple.com/xcode/) - (Abra a sua loja da Apple Store e procure por "Xcode", e instale-o).
* [Homebrew](https://brew.sh/index_pt-br) - (Siga as instruções)

Após instalar os dois requisitos acima, precisaremos também instalar o [Node](https://nodejs.org/en/) e o [Watchman](https://facebook.github.io/watchman/docs/install.html) 

Abra o terminal e execute os comandos abaixo: 

```
"brew install node" - (Aguarde baixar os pacotes)
```

```
"brew install watchman" - (Aguarde baixar os pacotes)
```


### Finalizando

Após a instalação de todos os requisitos, e principalmente o [Node](https://nodejs.org/en/), será necessário instalar a interface de linha de comando do react-native, abra o cmd ou terminal e execute:

```
"npm install -g react-native-cli"
```

Instalado a CLI do react-native, teremos que instalar as dependencias, do projeto, navegue pelo cmd ou terminal, até a pasta do projeto e execute: 

```
"npm install" - (Aguarde baixar todas dependencias do projeto)
```

Após isso precisará também criar o arquivo de configuração, para isso: 

```
"npm run create-config" - (Cria um arquivo de configuração para o projeto)
```

Pronto tudo finalizado, agora é só rodar o projeto.

## Rodando Projeto

#### Android

**Emulador** - Abra um emulador de android na versão que desejar utilizar. 
**Dispositivo físico "celular"** - Habilite as "Opções de Desenvolvedor" e a "Depuração USB", e conecte um USB ao dispositivo.   

Após emulador ou celular estiverem habilitados, execute no cmd ou terminal: 

```
"adb devices" - (Verifica se tem algum dispositivo conectado, para iniciar o projeto).
```

E finalmente para executar o projeto, navegue pelo cmd ou terminal, até a pasta do projeto e execute: 

```
"react-native run-android" - (Aguarde o carregamento do projeto)
```

#### IOS

**Emulador** - Abra um emulador de ios na versão que desejar utilizar. 

Após emulador habilitado, execute no cmd ou terminal: 

```
"adb devices" - (Verifica se tem algum dispositivo conectado, para iniciar o projeto).
```

E finalmente para executar o projeto, navegue pelo cmd ou terminal, até a pasta do projeto e execute: 

```
"react-native run-ios" - (Aguarde o carregamento do projeto)
```

## Adicionais

Caso utilize o  [Visual Studio Code](https://visualstudio.microsoft.com/pt-br/downloads/), eis aqui algumas ferramentas que serão úteis no seu dia a dia: 

**Extensões**

* [Power Mode](https://github.com/BigEggTools/PowerMode) - (Personalização na digitação dos seus códigos).
* [Color Highlight](https://github.com/egonyans/vscode-ext-color-highlight) - (Mostra a cor de um valor hexadecimal).
* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - (Mostra o tamanho do pacote importado, isso auxiliar para saber quais pacotes estão pesando mais no projeto).

 