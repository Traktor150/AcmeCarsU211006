'use strict';

const express = require('express');

const router = express.Router();

const Script_controler = require('../controler/scriptControler');

router.get('/app', Script_controler.carDataJs);

module.exports = router;