const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize (
    
        process.env.DB,
        process.env.USER, 
        process.env.PASSWORD,

    {
        host: 'localhos',
        dialect: 'mysql',
        port: 3306 
    }
);

module.exports = sequelize;