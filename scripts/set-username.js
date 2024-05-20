document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const submit = document.getElementById('submit');

    submit.addEventListener('click', function() {
        const name = username.value;
        if (name) {
            localStorage.setItem('username', name);
        } else {
            alert('Please enter a name.');
        }
    });
});