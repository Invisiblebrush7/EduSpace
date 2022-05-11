async function getProducts() {
	if (event !== undefined) {
		event.preventDefault();
	}

	let subjects = await loadsubjects(subjectsURL);

	container.innerHTML = productListToHTML(subjects);
}
