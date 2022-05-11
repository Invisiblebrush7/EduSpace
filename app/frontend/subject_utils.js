const subjectsURL = 'http://localhost:3000/materias/get';

function subjectToHTML(subject) {
	let name = subject.name;
	let id = subject.teacherID;

	let teacherHTML = `
		<div id="teacherCard">
			<div class="d-flex justify-content-start-sm" style="border: 1px solid #000">
				<button id="circle"></button>
				<div class="col-md-6 col-sm-3">
					<p style="margin-top: 20px; margin-left: 5px">Profesor(a)</p>
					<p style="margin-left: 5px; font-size: 30px">${id}</p>
					<p style="margin-left: 5px; font-size: 18px">${name}</p>
				</div>
			</div>
		</div>
		`;

	return teacherHTML;
}

function subjectsListToHTML(subjects) {
	let mainList = `<div id="mainList">`;

	subjects.forEach((subject) => {
		mainList += subjectToHTML(subject);
	});

	return mainList + '</div>';
}
