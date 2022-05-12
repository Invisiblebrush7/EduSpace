'use strict';

const express = require('express');
const router = express.Router();

const TeacherSchema = require('../models/teacherModel');
const SubjectSchema = require('../models/subjectModel');

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

			if (subject._id.toString() !== id) {
				subjects.push(subject);
			}
		});
		await TeacherSchema.findByIdAndUpdate(req.params.teacher_id, { $set: { subjects: subjects } });

		res.redirect('/materias');
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

router.route('/agregar').post(async (req, res) => {
	let teacher = await TeacherSchema.findById(req.body.teacherID);
	if (!teacher) throw Error('No teacher found');

	let newSubject = new SubjectSchema({
		name: req.body.name,
		description: req.body.description,
		requiresOneBefore: req.body.requiresOneBefore !== undefined,
		teacherID: teacher.id.toString(),
	});

	let subjects = teacher.subjects === undefined ? [] : teacher.subjects;

	subjects.push(newSubject);

	await TeacherSchema.findByIdAndUpdate(teacher.id, { $set: { subjects: subjects } });
	res.redirect('/materias');
});

module.exports = router;
