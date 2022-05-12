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

function modalFunctionality() {
	let modal = document.getElementById('new-comment-modal');

	let span = document.querySelector('#closeBtn');

	let btns = document.querySelectorAll('.openModal');

	btns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			let teacherID = btn.dataset.teacherid;
			let subjectID = btn.dataset.subjectid;
			let form = document.querySelector('#new-comment-form');
			modal.style.display = 'block';
			form.action = document.baseURI + '/' + teacherID + '/' + subjectID + '/new_comment';
		});
	});

	span.addEventListener('click', (e) => {
		e.preventDefault();
		modal.style.display = 'none';
	});

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
}

function changePathOfForm() {
	let btn = document.querySelector('#createComment');
	let form = document.querySelector('#new-comment-form');
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		form.action = document.baseURI + '/';
	});
}
