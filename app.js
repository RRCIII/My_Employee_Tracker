const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
