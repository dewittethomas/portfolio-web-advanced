document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('username');
    const username = document.getElementById('username');
    
    if (name) {
        username.textContent = name;
    } else {
        username.textContent = "Not Found";
    }
});
