'use strict';

async function getSubjects() {
	if (event !== undefined) {
		event.preventDefault();
	}
	let subjects = await loadSubjects(subjectsURL);
	let container = document.getElementById('mainList');
	container.innerHTML = subjectsListToHTML(subjects);
}
async function getTeacherByID(id) {
	if (event !== undefined) {
		event.preventDefault();
	}
	let teacher = await loadTeacherByID('http://localhost:3000/maestros/' + id);
	return teacher;
}
getSubjects();
