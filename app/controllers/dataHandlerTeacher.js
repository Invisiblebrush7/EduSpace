'use strict';

const fs = require('fs');
const Teacher = require('./teacher');

class DataHandlerTeacher {
	static teachers = JSON.parse(fs.readFileSync('./app/data/teachers.json'));

	static saveFile() {
		fs.writeFileSync('./app/data/teachers.json', JSON.stringify(DataHandlerTeacher.teachers));
	}

	static getTeachers() {
		return DataHandlerTeacher.teachers;
	}
	static getTeacherByID(_id) {
		_id = parseInt(_id);
		let teacher = DataHandlerTeacher.getTeachers().find((teacher) => teacher._id === _id);
		return teacher;
	}
	static createTeacher(teacher) {
		let newTeacher = Teacher.createFromObject(teacher);
		DataHandlerTeacher.getTeachers().push(newTeacher);
		DataHandlerTeacher.saveFile();
		return newTeacher;
	}
	static updateTeacher(id, updatedTeacher) {
		let teacherToChange = DataHandlerTeacher.getProductByID(id);
		if (teacherToChange === undefined || updatedTeacher === undefined) return undefined;

		for (let property in updatedTeacher) {
			if (property !== 'id') {
				let subproperty = `_${property}`;

				updatedTeacher[subproperty] = updatedTeacher[property];
			}
		}
		DataHandlerTeacher.saveFile();
		return updatedTeacher;
	}
	static deleteTeacher(_id) {
		let index = DataHandlerTeacher.getTeachers().findIndex((teacher) => teacher['_id'] === _id);
		let teacher = undefined;
		if (index !== -1) {
			teacher = DataHandlerTeacher.getTeachers()[index];
			DataHandlerTeacher.getTeachers().splice(index, 1);
		}
		DataHandlerTeacher.saveFile();
		return teacher;
	}
}

module.exports = DataHandlerTeacher;
