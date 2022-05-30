const express = require("express");
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("index.ejs");
});



app.listen(4000, function(erro){
    if(erro){
        console.log("Aconteceu um erro");
    }else {
        console.log();
    }
})