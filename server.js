const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');



// Middleware to handle parsed JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening to: http//:localhost:${PORT}`);
  });
});