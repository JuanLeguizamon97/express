const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

routerApi(app);