document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('username');
    const container = document.querySelector('.input-container');
    const status = document.querySelector('.status');
    const message = document.getElementById('status-message');
    const recommended = document.getElementById('recommended');
    const username = document.getElementById('username');
    
    status.classList.remove('fail');

    if (name) {
        username.textContent = name;
    } else {
        container.classList.add('hidden');
        status.classList.remove('hidden');
        status.classList.add('fail');
        message.textContent = 'Your name isn\'t in the system yet.';
        recommended.innerHTML = 'Add your name <a href="/application/what-name.html">Here</a>';
        recommended.classList.remove('hidden');
    }
});