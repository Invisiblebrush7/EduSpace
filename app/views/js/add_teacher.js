`use strict`;

const form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {

        
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let age = document.getElementById('age').value
        
        name = name.trim()
        email = email.trim()
        age = age.trim()


        const response = await fetch('/maestros/agregar', {
            method: 'POST',
            body: JSON.stringify({ email, name, age }),
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem('token')
            }
        })
        const responseJson = await response.json()
        if (response.status !== 200) throw new Error(responseJson.message)

        window.location.href = '/teachers.html'
    } catch (error) {
        console.error('[Error] addEventListener: ', error)

    }

})


