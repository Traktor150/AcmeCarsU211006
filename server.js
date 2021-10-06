'use strict';

const express = require('express');
const server = express();
const port = process.env.PORT || 8083;

//const router = require('./routes');

const scriptRouter = require('./routes/scriptRoute');
const defaultRouter = require('./routes/default');
const carRouter = require('./routes/CarRoute');

server.use('/js', scriptRouter);

server.use('/cars', carRouter);

server.use('/', defaultRouter);

server.use(express.static('public'));



server.listen(port);
console.log(`server running on port: ${port}`)