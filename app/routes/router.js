const express = require('express');
const subjects = require('./subject_routes');
const teachers = require('./teacher_routes');
const auth = require('./auth');
const { checkToken } = require('../middlewares/auth');

const router = express.Router();

router.use('/materias', [checkToken], subjects);
router.use('/maestros', [checkToken], teachers);
router.use('/auth', auth);

module.exports = router;
