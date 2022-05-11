const subjectsURL = 'http://localhost:3000/materias/get';

function subjectToHTML(subject, teacher) {
	let name = subject._name;

	let teacherHTML = `
		<div id="teacherCard">
			<div class="d-flex justify-content-start-sm" style="border: 1px solid #000">
				<button id="circle"></button>
				<div class="col-md-6 col-sm-3">
					<p style="margin-top: 20px; margin-left: 5px">Profesor(a)</p>
					<p style="margin-left: 5px; font-size: 30px">${name}</p>
					<p style="margin-left: 5px; font-size: 18px">${teacher._name}</p>
				</div>
			</div>
		</div>
		`;

	return teacherHTML;
}

function subjectsListToHTML(data) {
	let mainList = '';

	for (let i = 0; i < data[0].length; i++) {
		mainList += subjectToHTML(data[0][i], data[1][i]);
	}
	return mainList;
}
