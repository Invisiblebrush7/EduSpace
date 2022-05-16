fetch('../views/partials/navbarHome.html')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector('#navbarHome').innerHTML = data;
    });