const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();


const PORT = process.env.PORT || 3001; 

const app = express();

// Middleware to handle parsed JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Default response to other query response (NOT found)
app.use((req, res) =>{
    res.status(404).end();
})

sequelize.sync().then(() => {
app.listen(PORT, () => console.log(`now listening to https//:localhost${PORT}`))
})