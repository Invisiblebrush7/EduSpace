'use strict';

const express = require('express');
const DataHandlerTeacher = require('../controllers/dataHandlerTeacher');
const router = express.Router();

router.route('/get').get((req, res) => {
	let teachers = undefined;
	teachers = DataHandlerTeacher.getTeachers();
	if (teachers !== undefined) res.status(200).json(teachers);
	else res.status(400).send('Error');
});

router.route('/:id').get((req, res) => {
	if (req.params.id !== undefined) {
		let teacher = dataHandler.getTeacherByID(req.params.id);
		if (teacher !== undefined) {
			res.status(200).json(teacher);
		} else {
			res.status(404).send(':(');
		}
	} else {
		return undefined;
	}
});

module.exports = router;
