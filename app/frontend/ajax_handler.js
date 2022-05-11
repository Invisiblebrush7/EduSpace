async function loadsubjects(url) {
	let response = await fetch(url);
	if (response.status != 200) return [];
	let subjects = await response.json();
	return subjects;
}
