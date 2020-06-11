require('dotenv').config();

const express = require('express');

const { list } = require('./controllers/race');
  
const app = express();

app.get('/race', list);
//app.get('/race/:id', detail);

app.listen(process.env.PORT);