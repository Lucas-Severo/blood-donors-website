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

const donors = [
]

server.get("/", function(req, res) {
    return res.render("index.html", {donors});
});

server.post("/", function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    if(name == "" || email == "" || blood == ""){
        return res.send("Todos os campos precisam ser preenchidos");
    }

    donors.push({name, email, blood});

    return res.redirect("/");
})

server.listen(3000, function() {
    console.log("listening on port 3000");
})