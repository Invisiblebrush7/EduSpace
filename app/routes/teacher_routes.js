'use strict';

const express = require('express');
const DataHandlerTeacher = require('../controllers/dataHandlerTeacher');
const router = express.Router();

const TeacherSchema = require('../models/teacherModel');

router.route('/get').get(async (req, res) => {
	try {
		const teachers = await TeacherSchema.find();
		if (!teachers) throw Error('No teachers found');
		res.status(200).json(teachers);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

router.route('/:id').get(async (req, res) => {
	try {
		const teacher = await TeacherSchema.findById(req.params.id);
		if (!teacher) throw Error('No teachers found');
		res.status(200).json(teacher);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

module.exports = router;
