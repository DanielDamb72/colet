const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connection = require('./database/database.js');
const perfil = require('./database/perfil');

const validarCadastro = require('./perfil/validarCadastro');

connection
     .authenticate()
     .then(() => {
         console.log("Conexão feita com o banco de dados!");
     })
     .catch((msgErro) => {
         console.log(msgErro);
     })

// usando o ejs como view machine
app.set('view engine','ejs');
// estáticos
app.use(express.static('public'));
// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", validarCadastro);


app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/login", function(req, res){
    res.render("login.ejs");
});

app.get("/cadastro", function(req, res){
    res.render("cadastro.ejs");
});

app.get("/encerrouSessao", function(req, res){
    res.render("encerrouSessao.ejs");
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else {
        console.log();
    }
})