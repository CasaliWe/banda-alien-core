const {Sequelize} = require('sequelize')

require('dotenv').config()


const sequelize = new Sequelize('alie_banco', 'alie_admin', 'W1e2s3l4e5i6@', {
     host: '77.37.69.27',
     dialect:'mysql'
})

module.exports = sequelize