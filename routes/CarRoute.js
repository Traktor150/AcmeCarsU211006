'use strict';

const express = require('express');

const router = express.Router();

const Cars_controler = require('../controler/CarsControler');

router.get('/data', Cars_controler.carData);

module.exports = router;