const subjectsURL = 'http://localhost:3000/materias/get';

function subjectToHTML(subject) {
    let comments = '';

    //subject.comments.forEach((comment) => {
    //    comments += `<li>${comment}</li>`;
    //});

    let teacherHTML = `
		<td>${subject.name}</td>
      	<td><p style="margin-left: 5px; font-size: 20px">${subject.description}</td>
		`;
    return teacherHTML;
}

function subjectsListToHTML(subjects) {
    let mainList = '';

    subjects.forEach((subject) => {
        mainList += subjectToHTML(subject);
    });

    return mainList;
}