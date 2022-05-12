const teachersURL = 'http://localhost:3000/maestros/get';




function teacherToHTML(teacher) {

    console.log(teacher.subjects[0]);
    //let teacherHTML = `
    //	<div id="teacherCard">
    //		<div class="d-flex justify-content-start-sm" style="border: 1px solid #000">
    //			<button id="circle"></button>
    //			<div class="col-md-6 col-sm-3">
    //				<p style="margin-top: 20px; margin-left: 5px">Profesor(a)</p>
    //				<p style="margin-left: 5px; font-size: 30px">${teacher.name}</p>
    //				<p style="margin-left: 5px; font-size: 18px">Edad: ${teacher.age}</p>
    //				<p style="margin-left: 5px; font-size: 18px">Email: ${teacher.email}</p>
    //			</div>
    //		</div>
    //	</div>
    //	`;

    return `
           
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5">
            <div >
                <div class="d-flex justify-content-start-sm" style="border: 1px solid #000">
                    <button id="circle"></button>
                    <div class="col-md-6 col-sm-3">
                        <p style="margin-top: 20px; margin-left: 5px">Profesor(a)</p>
                        <p style="margin-left: 5px; font-size: 30px">${teacher.name}</p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-sm-3" id="teacherInfo">
            <div class="d-flex-column justify-content-center mt-5">
               
                <p style="text-align: center">Profesor(a)</p>
                <hr style="width: 100%; text-align: center; color: #a73447" />
                <strong>Materias que imparte:</strong>
                <ul id="Courses">
                    <li>
                        <div class="d-flex justify-content-between">
                            <p id="CourseName">${teacher.subjects.name}</p>
                            <a class="fa fa-star checked" id="Grade">Comentarios</a>
                        </div>
                        <p id="CourseName">${teacher.email}</p>
                    </li>
                </ul>
            </div>
        </div>
        
           `

}


function teachersListToHTML(teachers) {
    let mainList = '';

    teachers.forEach((teacher) => {
        mainList += teacherToHTML(teacher);
    });

    return mainList;
}


teacherCard.addEventListener("click", (e) => {
    e.preventDefault();
    let stars = e.target.id == 'Grade';

    if (stars) {
        console.log('Same');
        window.open('/app/views/reviews.html');

    }

});