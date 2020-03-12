const express = require("express");
const server = express();

// ativando o body do formulario
server.use(express.urlencoded({extended: true}));

// importando os arquivos estaticos
server.use(express.static("public"));

// configurando nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure({
    express: server,
    noCache: true
})

const Pool = require('pg').Pool;
const db = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'donor',
    password: 'root',
    port: 5432
});

server.get("/", function(req, res) {
    db.query("SELECT * FROM donor", function(err, result) {
        if (err)
        {
            return res.send("Erro ao acessar o banco de dados");
        }
        const donors = result.rows;
        return res.render('index.html', {donors});
    });
});

server.post("/", function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    if(name == "" || email == "" || blood == ""){
        return res.send("Todos os campos precisam ser preenchidos");
    }

    db.query(`INSERT INTO donor (name, email, blood) 
    VALUES ('${name}', '${email}', '${blood}');`, function(err, result){
        if(err)
        {
            return res.send("Erro ao acessar banco de dados");
        }

        return res.redirect("/");
    });
})

server.listen(3000, function() {
    console.log("listening on port 3000");
})