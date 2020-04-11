# Cypress + Joi

Projeto de exemplo para realização de testes de serviço utilizando o Cypress + Joi

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [Joi](https://www.npmjs.com/package/@hapi/joi "Joi")

## Estrutura de pastas

📦cypress-api-testing  
 ┣ 📂cypress  
 ┃ ┣ 📂fixtures  
 ┃ ┃ ┗ 📜example.json  
 ┃ ┣ 📂integration  
 ┃ ┃ ┗ 📂services  
 ┃ ┃ ┃ ┣ 📂contracts  
 ┃ ┃ ┃ ┃ ┗ 📜ability.contract.js  
 ┃ ┃ ┃ ┗ 📂tests  
 ┃ ┃ ┃ ┃ ┣ 📜Ability.spec.js  
 ┃ ┃ ┃ ┃ ┗ 📜Pokemon.spec.js  
 ┃ ┣ 📂plugins  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┗ 📂support  
 ┃ ┃ ┣ 📜commands.js  
 ┃ ┃ ┗ 📜index.js  
 ┣ 📜README.md  
 ┣ 📜cypress.json  
 ┗ 📜package.json  

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm i
```
**Rodar os testes:**  
```
npm run test
```
**Gerar o report e abrir no navegador:**  
```
npm run report
```
**Apagar os arquivos gerados para o report:**  
```
npm run clean-report
```

Após, é somente executar os testes.

### Tutorial para iniciar um novo projeto utilizando está estrutura

* Dentro da pasta especifica para o projeto:
```
npm init -y
```

* Instalar a última versão do cypress, Joi e joiAssert:
```
npm i cypress
npm i @hapi/joi
```

* Em um terminal execute o comando abaixo para abrir o cypress:
```
cypress open 
```

### Trick

* Você pode abrir o projeto utilizando o `npx`:
```
npx cypress open
```