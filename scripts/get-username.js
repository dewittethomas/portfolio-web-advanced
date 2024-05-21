document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('username');
    const username = document.querySelector('.input-container .username');
    
    if (name) {
        username.textContent = name;
    } else {
        username.textContent = "Not Found";
    }
});
