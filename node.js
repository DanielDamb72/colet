const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


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

app.post("/inicialCliente", function(req, res){
    res.render("inicialCliente.ejs");
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else {
        console.log();
    }
})