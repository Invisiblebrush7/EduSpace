async function getSubjects() {
	if (event !== undefined) {
		event.preventDefault();
	}

	let subjects = await loadsubjects(subjectsURL);
	let container = document.getElementById('mainList');
	container.innerHTML = productListToHTML(subjects);
}
getSubjects();
console.log('****');
