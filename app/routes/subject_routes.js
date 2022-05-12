'use strict';

const express = require('express');
const router = express.Router();

const TeacherSchema = require('../models/teacherModel');

router.route('/get').get(async (req, res) => {
	try {
		let subjects = [];

		let teachers = await TeacherSchema.find();

		teachers.forEach((teacher) => {
			teacher.subjects.forEach((subject) => {
				subject.teacher_name = teacher.name;
				subject.teacherID = teacher.id;
				subjects.push(subject);
			});
		});

		if (!teachers && !subjects) throw Error('No subjects found');
		res.status(200).json(subjects);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

router.route('/delete/:id/:teacher_id').get(async (req, res) => {
	try {
		let teacher = await TeacherSchema.findById(req.params.teacher_id);
		if (!teacher) throw Error('No teachers found');

		let subjects = [];

		teacher.subjects.forEach((subject) => {
			let id = req.params.id;

			if (req.params.id !== id) {
				subjects.push(subject);
			}
		});

		await TeacherSchema.updateOne({ id: req.params.teacher_id }, { $unset: { subjects: '' } });
		// await TeacherSchema.updateOne({ id: req.params.teacher_id }, { $set: { subjects: subjects } });
		teacher = await TeacherSchema.findById(req.params.teacher_id);

		// res.redirect('/materias');
		res.status(200).json(teacher);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

module.exports = router;
