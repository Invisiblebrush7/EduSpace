'use strict';

async function getTeachers() {
    if (event !== undefined) {
        event.preventDefault();
    }
    let teachers = await loadTeachers(teachersURL);
    let container = document.getElementById('teacherCard');
    container.innerHTML = teachersListToHTML(teachers);
}

getTeachers();