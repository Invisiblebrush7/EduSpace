'use strict';

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/dataHandlerTeacher');

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
