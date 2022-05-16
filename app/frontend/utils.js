fetch('../views/partials/navbar.html')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector('#navbar').innerHTML = data;
    });
fetch('../views/partials/navbarHome.html')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector('#navbarHome').innerHTML = data;
    });


fetch('../views/partials/navbarAuth.html')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector('#navbarAuth').innerHTML = data;
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

    window.onclick = function(event) {
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

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}