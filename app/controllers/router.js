const express = require('express');
const teachersRouter = require('../routes/teachers');

const router = express.Router();

router.use('/materias', teachersRouter);

module.exports = router;
