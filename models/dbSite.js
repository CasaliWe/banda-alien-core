const {DataTypes} = require('sequelize')

//CONEXÃO BANCO DE DADOS
const db = require('../db/conn')



//TABELA
const dbSite = db.define('config', {
     teste: {
          type: DataTypes.STRING,
          required: true
     }
})

module.exports = dbSite