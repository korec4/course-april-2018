'use strict';

const PORT = 3000;

const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const bodyParser = require('body-parser');

const services = require('./services');

const app = express();

app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .get('/mapLanguages', services.mapLanguages)
    .listen(PORT, () => console.log(chalk.green(`Server starting at http://127.0.0.1:${PORT}`)));
