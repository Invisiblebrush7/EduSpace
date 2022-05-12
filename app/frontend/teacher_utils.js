const teachersURL = 'http://localhost:3000/maestros/get';

function teacherToHTML(teacher) {
	let subjects = '';
	let comments = '';

	teacher.subjects.forEach((subject) => {
		subjects += `
        <li>
            ${subject.name}
        </li>`;
		subject.comments.forEach((comment) => {
			comments += `
            <li>
                ${comment}
            </li>
            `;
		});
	});

	return `
	<div class="container-card-teacher">
		<div class="product-details">
			<h1>${teacher.name}</h1>
			<div class="d-flex justify-content-center">
				<hr style="width: 535px; text-align: center; color: #a73447" />
			</div>
			<p class="information">
				Edad: ${teacher.age}
			</p>
			<p class="information">
				Email: ${teacher.email}
			</p>
			<p class="information">
				Materias que imparte:
			</p>
            <ul>
                ${subjects}
            </ul>
			<p class="information">
				Comentarios Generales:
			</p>
            <ul>
                ${comments}
            </ul>
            <div class="my-3"></div>
			<a href="/profesores/delete/${teacher._id}">
				<i class="fa-solid fa-trash"></i>
			</a>			
		</div>
	</div>	    
           `;
}

function teachersListToHTML(teachers) {
	let mainList = '';

	teachers.forEach((teacher) => {
		mainList += teacherToHTML(teacher);
	});

	return mainList;
}
