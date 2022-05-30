const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/", function(req, res){
    res.send('Ola');
});



app.listen(4000, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else {
        console.log();
    }
})