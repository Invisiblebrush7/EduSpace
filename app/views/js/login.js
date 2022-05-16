`use strict`;

const signInForm = document.getElementById('signin-form')




document.getElementById('email').value = 'david@naranjo.com'
document.getElementById('password').value = '123456'

const errorElement = document.getElementById('error')

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {

        
        let email = document.getElementById('email').value
        const password = document.getElementById('password').value
        email = email.trim()

        errorElement.innerHTML = '';
        errorElement.classList.add('d-none')

        const response = await fetch('/auth/signin', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseJson = await response.json()
        if (response.status !== 200) throw new Error(responseJson.message)

        console.log({ response })
        const { token, student } = responseJson

        localStorage.setItem('token', token)
        localStorage.setItem('name', student.name)
        localStorage.setItem('email', student.email)

        window.location.href = '/'
    } catch (error) {
        
        errorElement.innerHTML = error.message
        errorElement.classList.remove('d-none')
        console.error('[Error] addEventListener: ', error)

    }

})


