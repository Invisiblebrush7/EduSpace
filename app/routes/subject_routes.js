'use strict';

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/dataHandler');
const dataHandlerTeacher = require('../controllers/dataHandlerTeacher');

router.route('/get').get((req, res) => {
	let subjects = undefined;
	let teachers = [];
	if (req.query.filter === undefined) {
		subjects = dataHandler.getSubjects();
		subjects.forEach((subject) => {
			let teacher = dataHandlerTeacher.getTeacherByID(subject._teacherID);
			teachers.push(teacher);
		});
	} else {
		subjects = dataHandler.findSubject(req.query.filter);
	}
	if (subjects !== undefined) res.status(200).json([subjects, teachers]);
	else res.status(400).send('Error');
});

module.exports = router;
