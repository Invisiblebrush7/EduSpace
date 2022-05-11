'use strict';

const express = require('express');
const router = express.Router();
const dataHandler = require('../controllers/dataHandler');

router.route('/').get((req, res) => {
	let subjects = undefined;
	if (req.query.filter === undefined) {
		subjects = dataHandler.getSubjects();
		console.log('Hola');
	} else {
		subjects = dataHandler.findSubject(req.query.filter);
	}
	if (subjects !== undefined) res.status(200).json(subjects);
	else res.status(400).send('Error');
});

module.exports = router;
