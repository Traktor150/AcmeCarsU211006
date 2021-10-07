'use strict';

const express = require('express');

const router = express.Router();

const Cars_controler = require('../controler/CarsControler');

router.get('/data', Cars_controler.carData);
router.get('/:Id', Cars_controler.carId);

module.exports = router;