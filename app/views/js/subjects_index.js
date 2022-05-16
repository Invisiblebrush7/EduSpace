'use strict';




async function getSubjects() {
	if (event !== undefined) {
		event.preventDefault();
	}
	let subjects = await loadSubjects(subjectsURL);

	let container = document.getElementById('contenido');
	container.innerHTML = subjectsListToHTML(subjects);
	modalFunctionality();
	viewSubjectModalFunctionality();
}
async function getTeacherByID(id) {
	if (event !== undefined) {
		event.preventDefault();
	}
	let teacher = await loadTeacherByID('http://localhost:3000/maestros/' + id);
	return teacher;
}
async function getSubjectByID(id) {
	if (event !== undefined) {
		event.preventDefault();
	}
	let subject = await loadSubjectByID('http://localhost:3000/materias/' + id);
	return subject;
}
async function getTeachersToSelects() {
	if (event !== undefined) {
		event.preventDefault();
	}
	let teachers = await loadTeachers(teachersURL);

	let container = document.querySelector('#teacherSelect');
	let options = ``;
	teachers.forEach((teacher) => {
		options += `<option value="${teacher._id}">${teacher.name}</option>`;
	});
	container.innerHTML = options;
}
