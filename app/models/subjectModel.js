const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

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
		type: ObjectId,
		required: true,
	},
});

module.exports = mongoose.model('SubjectSchema', SubjectSchema);
