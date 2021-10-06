'use strict';

const express = require('express');

const router = express.Router();

const default_controler = require('../controler/default');

router.get('/', default_controler.home);

module.exports = router;
