const Sequelize = require("sequelize");

const connection = new Sequelize('sistema_de_cadastro', 'root', 'reciclagem',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;