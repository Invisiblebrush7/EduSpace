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
    <div id="teacherCard">
		<div class="d-flex justify-content-start-sm" style="border: 1px solid #000">
			<button id="circle"></button>
			<div class="col-md-6 col-sm-3">
				<p style="margin-top: 20px; margin-left: 5px">Profesor(a)</p>
				<p style="margin-left: 5px; font-size: 30px">${productToHTML.teacherID.name}</p>
				<p style="margin-left: 5px; font-size: 18px">${productToHTML.name}</p>
			</div>
		</div>
	</div>
    `;
    return productsAsHTML;
}