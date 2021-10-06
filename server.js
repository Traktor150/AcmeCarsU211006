'use strict';

const express = require('express');
const server = express();
const port = process.env.PORT || 8083;

//const router = require('./routes');

const defaultRouter = require('./routes/default');


server.use(express.static('public'));

server.use('/', defaultRouter);





server.listen(port);
console.log(`server running on port: ${port}`)