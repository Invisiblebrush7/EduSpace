const productsURL = 'http://localhost:3000/products';

function productToHTML(subject) {
	// this.name = name;
	// this.description = description;
	// this.requiresOneBefore = requiresOneBefore;
	// this.teacherID = teacherID;
	// this.id = 1;
	let name = subject.name;
	let description = subject.description;
	let requiresOneBefore = subject.requiresOneBefore;
	let teacherID = subject.teacherID;
	let id = subject.id;

	let productHTML = ``;
	return productHTML;
}

function productListToHTML(products) {
	let productsAsHTML = '';
	products.forEach((product) => {
		productsAsHTML += productToHTML(product);
	});
	let mainList = `
    <div class="container mb-5" id="mainList">${productsAsHTML}</div>
    `;
	return productsAsHTML;
}
