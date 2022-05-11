const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	subjects: {
		type: Array,
		required: true,
	},
});

module.exports = mongoose.model('Teacher', TeacherSchema);
