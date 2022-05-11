const express = require('express');
const teachersRouter = require('../routes/teachers');

const router = express.Router();

router.use('/profesores', teachersRouter);

module.exports = router;
