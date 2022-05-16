`use strict`;


document.getElementById('email').value = 'david@naranjo.com'
document.getElementById('name').value = 'David'
document.getElementById('password').value = '123456'
document.getElementById('confirmPassword').value = '123456'

const errorElement = document.getElementById('error')


const registerForm = document.getElementById('register-form')
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {

        let email = document.getElementById('email').value
        let name = document.getElementById('name').value
        const password = document.getElementById('password').value
        const confirmPassword = document.getElementById('confirmPassword').value
        if (password !== confirmPassword) {
            throw new Error('Las contraseñas no coinciden')
        }
        email = email.trim()
        name = name.trim()

        errorElement.innerHTML = '';
        errorElement.classList.add('d-none')

        const response = await fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, name, password, }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseJson = await response.json()
        if (response.status !== 200) throw new Error(responseJson.message || 'Error Inesperado')

        console.log({ response })
        const { token, student } = responseJson

        localStorage.setItem('token', token)
        localStorage.setItem('email', student?.email)
        localStorage.setItem('name', student?.name)

        window.location.href = '/'

    } catch (error) {
        errorElement.innerHTML = error.message
        errorElement.classList.remove('d-none')
        console.error('[Error] addEventListener: ', error)
    }

})


