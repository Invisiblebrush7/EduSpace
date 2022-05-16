const customGetFetcher = (url) => {
	return fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'token': localStorage.getItem('token')
		},
	});
}
async function loadSubjects(url) {
	let response = await customGetFetcher(url);
	if (response.status != 200) return [];
	let subjects = await response.json();
	return subjects;
}
async function loadTeachers(url) {
	let response = await customGetFetcher(url);
	if (response.status != 200) return [];
	let teachers = await response.json();
	return teachers;
}

async function loadTeacherByID(url) {
	let response = await customGetFetcher(url);
	if (response.status != 200) return undefined;
	let teacher = await response.json();
	return teacher;
}
async function loadSubjectByID(url) {
	let response = await customGetFetcher(url);
	if (response.status != 200) return undefined;
	let subject = await response.json();
	return subject;
}


