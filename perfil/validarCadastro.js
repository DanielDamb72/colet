const express = require("express");
const router = express.Router();

router.get("/cadastro/falha", (req, res) => {
    res.redirect("/cadastro");
});

router.post("/cadastro/sucesso", (req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var tipoCliente = req.body.tipoCliente;

perfil.create({
    nome: nome,
    email: email,
    senha: senha,
    tipoCliente: tipoCliente,
}).then(() => {
    res.redirect("login")
})
});

module.exports = router;