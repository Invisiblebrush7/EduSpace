const express = require('express');
const subjects = require('../routes/subjects');

const router = express.Router();

router.use('/materias', subjects);

module.exports = router;
