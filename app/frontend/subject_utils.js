const subjectsURL = 'http://localhost:3000/materias/get';

function subjectToHTML(subject) {
	let teacher = `
	<div class="container-card">
		<div class="product-details">
			<h1>${subject.name}</h1>
			<p class="information">
				Profesor(a): ${subject.teacher_name}
			</p>
			<p class="information">
				${subject.description}
			</p>
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
