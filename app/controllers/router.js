const express = require('express');
const subjects = require('../routes/subject_routes');
const teachers = require('../routes/teacher_routes');

const router = express.Router();

router.use('/materias', subjects);
router.use('/maestros', teachers);

module.exports = router;
