# Aplicativo multiplataforma do projeto PAM (TCC UNICID)

![GitHub npm](https://img.shields.io/npm/v/npm?color=red)
![GitHub repo size](https://img.shields.io/github/repo-size/elccastro/pam-bot-app?label=repo%20size)
![GitHub last commit](https://img.shields.io/github/last-commit/elccastro/pam-bot-app)

> Aplicativo multiplataforma do chatbot para utilização do chatbot.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você tem uma máquina `Windows, Linux ou Mac`.
* Você instalou uma versão LTS do `node.js`
* Você instalou uma versão do `Java SE`
* Você possui o `Python` instalado
* Você possui o `Android Studio` instalado e configurado

## 🚀 Instalando o projeto

Antes de rodar o aplicativo, instale os softwares necessários:

#### Passos adicionais, apenas para usuários MAC OS

* Instalar o `Homebrew`
* Instalar o `Xcode`

Ainda configurando o ambiente no MAC, digite o seguinte comando no terminal:

```
brew install watchman
```

#### Passos para todos os usuários

Precisaremos instalar a interface de linha de comando do react-native, abra o terminal e execute:

```
npm install -g react-native-cli
```

Instalado a CLI do react-native, teremos que instalar as dependencias, do projeto, navegue pelo terminal até a pasta do projeto e execute: 

```
npm install
```

Após isso, precisaremos também criar o arquivo de configuração: 

```
npm run create-config
```

Com tudo finalizado, podemos rodar o projeto.


## ☕ Usando o projeto

É necessário abrir ou conectar os devices.

Obs.: Caso opte por utilizar um dispositivo Android real, é necessário habilitar nas opções de desenvolvedor a `Depuração USB` antes de conectar o aparelho ao computador.

Após emulador, simulador ou smartphone conectado, execute no terminal:

```
adb devices
```

Este comando lista os dispositivos conectados.

E finalmente, para executar o projeto, navegue pelo terminal até a pasta do projeto e execute: 

```
react-native run-android
```

ou

```
react-native run-ios
```

Obs.: Para realizar testes no aplicativo IOS ou para gerar versão final é necessário um ambiente Apple (Mac OS + Xcode)

## 🤝 Colaboradores

Segue os responsáveis pelo projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/elccastro">
        <sub>
          <b>Eliel Castro</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/csdccarneiro">
        <sub>
          <b>Caique dos Santos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
