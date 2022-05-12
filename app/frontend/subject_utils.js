const subjectsURL = 'http://localhost:3000/materias/get';

function subjectToHTML(subject) {
	let teacher = `
	<div class="container-card">
		<div class="product-details">
			<h1>${subject.name}</h1>
			<div class="d-flex justify-content-center">
				<hr style="width: 535px; text-align: center; color: #a73447" />
			</div>			
			<p class="information fw-800">
				Profesor(a): ${subject.teacher_name}
			</p>
			<p class="information">
				${subject.description}
			</p>
			<a href="/materias" class="openModal" data-teacherID="${subject.teacherID}" data-subjectID="${subject._id}">
				<i class="fa-solid fa-feather"></i>	
			</a>
			<a href="/materias/delete/${subject._id}/${subject.teacherID}">
				<i class="fa-solid fa-trash"></i>
			</a>
		</div>
	</div>
	`;

	return teacher;
}

function subjectsListToHTML(subjects) {
	let mainList = '';

	subjects.forEach((subject) => {
		mainList += subjectToHTML(subject);
	});

	return mainList;
}
