const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const config = require('config');
const { append } = require('vary');

app.use(bodyParser.json());

app.listen(3000, () => console.log('A API está funcionando!'));