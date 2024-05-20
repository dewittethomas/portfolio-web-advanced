document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('username');
    
    if (name) {
        const usernameElement = document.querySelector('.input-container .username');
        usernameElement.textContent = name;
    } else {
        alert('No name found in localStorage.');
    }
});
