'use strict';

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/dataHandler');
const dataHandlerTeacher = require('../controllers/dataHandlerTeacher');

const SubjectSchema = require('../models/subjectModel');
const TeacherSchema = require('../models/teacherModel');

// router.route('/get').get((req, res) => {
// 	let subjects = undefined;
// 	let teachers = [];
// 	if (req.query.filter === undefined) {
// 		subjects = dataHandler.getSubjects();
// 		subjects.forEach((subject) => {
// 			let teacher = dataHandlerTeacher.getTeacherByID(subject._teacherID);
// 			teachers.push(teacher);
// 		});
// 	} else {
// 		subjects = dataHandler.findSubject(req.query.filter);
// 	}
// 	if (subjects !== undefined) res.status(200).json([subjects, teachers]);
// 	else res.status(400).send('Error');
// });

router.route('/get').get(async (req, res) => {
	try {
		let subjects = [];

		let teachers = await TeacherSchema.find();

		teachers.forEach((teacher) => {
			teacher.subjects.forEach((subject) => {
				subject.teacher_name = teacher.name;
				subjects.push(subject);
			});
		});

		if (!teachers && !subjects) throw Error('No subjects found');
		res.status(200).json(subjects);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

module.exports = router;
