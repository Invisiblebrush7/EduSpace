const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	requiresOneBefore: {
		type: Boolean,
		required: true,
	},
	teacherID: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Subject', SubjectSchema);
