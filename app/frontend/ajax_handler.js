async function loadSubjects(url) {
	let response = await fetch(url);
	if (response.status != 200) return [];
	let subjects = await response.json();
	return subjects;
}
async function loadTeachers(url) {
	let response = await fetch(url);
	if (response.status != 200) return [];
	let teachers = await response.json();
	return teachers;
}

async function loadTeacherByID(url) {
	let response = await fetch(url);
	if (response.status != 200) return undefined;
	let teacher = await response.json();
	return teacher;
}
