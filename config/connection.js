const Sequalize = require('sequalize');
require('dotenv').config();

const sequalize = new Sequalize (
    {
        process.env.DB,
        process.env.USER, 
        process.env.PASSWORD
    },

    {
        host: 'localhos',
        dialect: 'mysql',
        port: 3306 
    }
);

module.exports = sequalize;