
const checkAuthUser = () => {
    try{

        let token = localStorage.getItem('token');
        if (token) return;
        
        localStorage.clear();
        window.location.href = '/';
    } catch(e) {
        console.error({e})
    }
}


checkAuthUser()