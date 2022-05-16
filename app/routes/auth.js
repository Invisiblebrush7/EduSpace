'use strict';

const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const { generateToken } = require('../utils/token');

router.post('/signin', async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) throw new Error('Email o password inválido');

		const student = await Student.findOne({ email, password });
		console.log({student})
		if (!student) throw new Error('La contraseña o el email son incorrectos');

		const token = generateToken({ email });

		res.status(200).json({ token, student });

	} catch (err) {

		res.status(400).json({ message: err?.message || 'Error Inesperado', error: err });
	}
});
router.post('/register', async (req, res) => {
	try {
		const { email, password, name } = req.body;

		if (!email) throw new Error('Email inválido');
		if (!password) throw new Error('Password inválido');
		if (!name) throw new Error('Name inválido');

		const newStudentM = new Student({ email, password, name });
		const newStudent = await newStudentM.save();
		console.log({newStudent})
		const token = generateToken({ email });

		res.status(200).json({ token, student: newStudent });

	} catch (err) {

		res.status(400).json({ message: err?.message || 'Error Inesperado', error: err });
	}
});


module.exports = router;
