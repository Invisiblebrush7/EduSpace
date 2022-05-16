const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	carreer: {
		type: String,
		required: false,
	},
	semester: {
		type: Number,
		required: false,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Student', StudentSchema);
