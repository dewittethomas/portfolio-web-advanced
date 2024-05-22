document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const submit = document.getElementById('submit');
    const status = document.querySelector('.status');
    const message = document.getElementById('status-message');
    const recommended = document.getElementById('recommended');



    submit.addEventListener('click', function() {
        const name = username.value;

        status.classList.remove('success', 'fail');
        recommended.classList.add('hidden');

        if (name) {
            localStorage.setItem('username', name);
            status.classList.remove('hidden');
            status.classList.add('success');
            message.textContent = `Your name "${name}" has been saved in the system.`;
            recommended.innerHTML = 'Discover Your Name <a href="/application/discover-name.html">Here</a>';
            recommended.classList.remove('hidden');
        } else {
            status.classList.remove('hidden');
            status.classList.add('fail');
            message.textContent = 'Fill in your name first before submitting.';
        }
    });
});