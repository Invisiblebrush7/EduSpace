`use strict`;

const form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {

        
        let name = document.getElementById('name').value
        let description = document.getElementById('description').value
        let cbox1 = document.getElementById('cbox1').checked
        let teacherSelect = document.getElementById('teacherSelect').value
        
        

        const response = await fetch('/materias/agregar', {
            method: 'POST',
            body: JSON.stringify({ 
                name,
                description,
                cbox1,
                teacherID: teacherSelect,

            }),
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token')
            }
        })
        const responseJson = await response.json()
        if (response.status !== 200) throw new Error(responseJson.message)

        window.location.href = '/courses.html'
    } catch (error) {
        console.error('[Error] addEventListener: ', error)

    }

})


