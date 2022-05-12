fetch('../views/partials/navbar.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('#navbar').innerHTML = data;
	});
fetch('../views/partials/bottom_navbar.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('#bottom-navbar').innerHTML = data;
	});
