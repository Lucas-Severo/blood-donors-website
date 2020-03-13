# Blood Donors Website
Um site para o cadastro de doadores de sangue
https://blood-donors-website.herokuapp.com/

![screenshot](public/screenshot.png)

## Requisitos:
- [Nodejs](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Instalação:

1) abra o terminal/prompt e digite ```git clone https://github.com/Lucas-Severo/blood-donors-website.git```
2) Vá até a pasta com ```cd blood-donors-website```
2) instale as dependências necessárias digitando ```npm install```

## Configuração:
- Após a instalação do postgreSQL, crie uma tabela com nome 'donor' e configure o banco de dados no arquivo [server.js](server.js)

```javascript
const db = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'database',
    password: 'password',
    port: 5432
});
```

## Execução:
Após todas as configurações execute o comando:
```sh
npm start
```
Com isso, um servidor será aberto na url: [127.0.0.1:3000](https://127.0.0.1:3000)

## Tecnologias:
- HTML, CSS, Javascript, Nodejs, Express, PostgreSQL

## Licença:
[MIT](https://choosealicense.com/licenses/mit/)
