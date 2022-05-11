const teachersURL = 'http://localhost:3000/maestros/get';

function teacherToHTML(teacher) {
	let teacherHTML = `
		<div id="teacherCard">
			<div class="d-flex justify-content-start-sm" style="border: 1px solid #000">
				<button id="circle"></button>
				<div class="col-md-6 col-sm-3">
					<p style="margin-top: 20px; margin-left: 5px">Profesor(a)</p>
					<p style="margin-left: 5px; font-size: 30px">${teacher._name}</p>
					<p style="margin-left: 5px; font-size: 18px">Edad: ${teacher._age}</p>
					<p style="margin-left: 5px; font-size: 18px">Email: ${teacher._email}</p>
				</div>
			</div>
		</div>
		`;

	return teacherHTML;
}

function teachersListToHTML(teachers) {
	let mainList = '';

	teachers.forEach((teacher) => {
		mainList += teacherToHTML(teacher);
	});

	return mainList;
}
