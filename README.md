<p align="center">
  <a href="https://brcontraovirus.org/">
    <img alt="Brasil contra o Vírus" src="https://brcontraovirus.org/assets/img/logo_2.png" width="60" />
  </a>
</p>
<h1 align="center">
  Brasil contra o Vírus
</h1>

Rede colaborativa de combate ao COVID-19 no Brasil

## 🎓 Como instalar

1.  **Instale as ferramentas na sua máquina**

    1. [NPM](https://www.npmjs.com/get-npm)
    2. [YARN](https://yarnpkg.com/getting-started/install)

    **Nota**: Caso tenha algum problema, consulte a sessão [Soluções de Erros](#Soluções-de-Erros)

2.  **Instale as dependências do projeto**
    ```shell
    yarn
    ```

## 🚀 Como começar

1. **Para desenvolver:**

   ```shell
   yarn start
   ```

2. **Agora só abrir o código e começar a editar!**

   O projeto estará rodando em `http://localhost:3000`!

## 🚀 Como validar

```shell
yarn run lint
```

## 🧐 O que temos no projeto?

Um resumo da estrutura do projeto.

    .
    ├── .cache
    ├── node_modules
    ├── public
    ├── src
    ├──── components
    ├──── images
    ├──── layouts
    ├──── pages
    ├──── templates
    ├── .editorconfig
    ├── .eslint
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── jsconfig.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/.cache`**: Diretório com arquivos de cache utilizados apenas durante o desenvolvimento. _Essa pasta deve permanecer no .gitignore_

2.  **`/node_modules`**: Diretório com todas as dependências do projeto que são instaladas durante `yarn install`. _Essa pasta deve permanecer no .gitignore_

3.  **`/public`**: Diretório gerado durante 2 processos com finalidades diferentes (_Essa pasta deve permanecer no .gitignore_):

    1.  `develop`: arquivos temporários

    2.  `build`: arquivos estáticos gerados que serão utilizados no ambiente de produção.

4)  **`/src`**: Nessa pastas temos todos os arquivos e códigos que são usados para desenvolvimento do site e onde faremos todas as alterações.

    1.  **`/src/components`**

    2.  **`/src/images`**

    3.  **`/src/layouts`**

    4.  **`/src/pages`**

    5.  **`/src/templates`**

5)  **`.gitignore`**: Arquivo que contém a lista de todos os arquivos que não devem ser enviados ao git durante o versionamento.

6)  **`.prettierrc`**: Arquivo de configuração do [Prettier](https://prettier.io/), ferramenta usada para manter a consistência da formatação do projeto.

7)  **`gatsby-config.js`**: Arquivo com todas as configurações usadas pelo [GatsbyJs](https://www.gatsbyjs.org/), ferramenta utilizada para gerar arquivos estáticos, gerenciar imagens . É neste arquivo que colocamos configurações dos plugins utilizados e etc. (Veja a [documentação das configurações](https://www.gatsbyjs.org/docs/gatsby-config/) para mais informações).

8)  **`package.lock`** Este arquivo é gerado automaticamente baseado nas versões das dependências do `package.json`. **(Você deve alterar esse arquivo).**

9)  **`package.json`**: Arquivo utilizado em projetos Node.js, onde armazenamos informações do projeto, as dependências a serem instaladas para o ambiente de produção e desenvolvimento, os scripts a serem rodados e etc.

10) **`README.md`**: Arquivo contendo algumas informações sobre o projeto.

## 💫 Deploy

O processo de deploy pode ser feito de duas maneiras:

1. **Deploy automatizado** sendo feito através do circleci.

2. **Deploy manual** seguindo os passos:

   1. Rodar:

   ```SHELL
   yarn build
   ```

   2. Copiar a pasta `public` gerada para o servidor

## 🌡 Soluções de Erros

1. Erro de versão do NodeJs

```SHELL
  yarn install v1.22.4
  [1/4] Resolving packages...
  [2/4] Fetching packages...
  error @typescript-eslint/eslint-plugin@2.28.0: The engine "node" is incompatible with this module. Expected version "^8.10.0 || ^10.13.0 || >=11.10.1". Got "11.2.0"
  error Found incompatible module.
```

1.  Atualize a versão do [NodeJs](https://nodejs.org/en/download/)

2.  Caso use Ubuntu LTS e/ou está com preguiça?

```SHELL
  yarn install --ignore-engines
```
