'use strict'

const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./appController');

const PORT = 4000;


const app = express();
 
app.use(cors())
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false})).listen(PORT);
 

console.log('todo list RESTful API server started on: ' + PORT);
 
app.get('/', function (req, res) {
  res.send('home page');
})

app.get('/data', controller.sendData)
