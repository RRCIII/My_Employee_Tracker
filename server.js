const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const { Department, Employee, Role } = require('./models/index');
const departData = express();


// Middleware to handle parsed JSON data
departData.use(express.json());
departData.use(express.urlencoded({ extended: true }))

departData.use({ Department, Employee, Role });

sequelize.sync().then(() => {
  departData.listen(PORT, () => {
    console.log(`Now listening to: http//:localhost:${PORT}`);
  });
});