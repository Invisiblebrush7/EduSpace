'use strict';


/**
 * sets the logged user in the navbar from the localStorage
 */
const setLoggedUser = async () => {
	const loginButtonElement = document.getElementById('login-button');
	const logoutButtonElement = document.getElementById('logout-button');
	const logoutButtonAElement = document.getElementById('logout-button-a');
	const userNameTagElement = document.getElementById('user-name');
	logoutButtonAElement.addEventListener('click', logout);

	logoutButtonElement.classList.add('d-none')
	loginButtonElement.classList.remove('d-none')

	const name = localStorage.getItem('name')
	const email = localStorage.getItem('email')

	const token = localStorage.getItem('token')
	if (token && token.length > 20) {
		userNameTagElement.innerText = `¡Hola ${name}! [${email}]`;
		loginButtonElement.classList.add('d-none')
		logoutButtonElement.classList.remove('d-none')

	} else {
		userNameTagElement.innerText = '';
		loginButtonElement.classList.remove('d-none')
		logoutButtonElement.classList.add('d-none')
	}

}
const getNavbar = async () => {
	const response = await fetch('partials/navbar.html')
	const responseText = await response.text();
	document.querySelector('#navbar').innerHTML = responseText;
}
const logout = () => {
	localStorage.clear()
	window.location.reload()
}

window.addEventListener('load', async () => {
	await getNavbar()
	setLoggedUser()
})

fetch('partials/bottom_navbar.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		const bottomNavbar = document.querySelector('#bottom-navbar')
		if (!bottomNavbar) {
			console.error('bottom navbar not found');
			return
		}

		bottomNavbar.innerHTML = data;
	});

const addComment = async(teacherId, subjectId) => {

	const comment = document.querySelector('#comment').value;
	await fetch(`/materias/${teacherId}/${subjectId}/new_comment`, {
		method: 'POST',
		headers: {
			token: localStorage.getItem('token'),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({comment})
	});
	location.reload();
}
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
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				addComment(teacherID, subjectID);
			})
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

function viewSubjectModalFunctionality() {
	let modal = document.getElementById('view-subject-modal');

	let span = document.querySelector('#closeSubjectBtn');

	let btns = document.querySelectorAll('.openSubjectModal');

	btns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			let name = btn.dataset.name;
			let description = btn.dataset.description;

			modal.style.display = 'block';
			document.querySelector('#subjectName').innerText = name;
			document.querySelector('#subjectDescription').innerText = description;
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


