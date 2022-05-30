const Sequelize = require('sequelize');
const connection = require('./database');

const perfil = connection.define('perfil',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    ,email:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    ,senha:{
        type: Sequelize.STRING,
        allowNull: false,
    }
    ,tipoCliente:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

perfil.sync({force: false}).then(() => {});

module.exports = perfil;