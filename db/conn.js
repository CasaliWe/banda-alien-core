const {Sequelize} = require('sequelize')

require('dotenv').config()


const sequelize = new Sequelize(process.env.BANCO, process.env.USER, process.env.SENHA, {
     host: process.env.HOST,
     dialect: process.env.TIPO
})

module.exports = sequelize