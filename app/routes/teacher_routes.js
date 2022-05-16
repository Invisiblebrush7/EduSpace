'use strict';

const express = require('express');
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

router.route('/agregar').post(async (req, res) => {
	let newTeacher = new TeacherSchema({
		name: req.body.name,
		email: req.body.email,
		age: parseInt(req.body.age),
		subjects: [],
	});
	await newTeacher.save();

	res.json({message: 'Todo Cool'})
});

router.route('/delete/:id').delete(async (req, res) => {
	try {
		await TeacherSchema.findByIdAndDelete(req.params.id);
		res.json({message: 'Todo Cool'})
	} catch (error) {
		res.status(400).json({message: 'No se pudo eliminar'})
	}

});

module.exports = router;
