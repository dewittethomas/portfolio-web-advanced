function fetchData() {
    return new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const gender = document.getElementById('gender');
    const first_name = document.getElementById('first-name');
    const last_name = document.getElementById('last-name');
    const age = document.getElementById('age');
    const country = document.getElementById('country');
    const email = document.getElementById('email');
    const container = document.querySelector('.input-container');
    const status = document.querySelector('.status');
    const message = document.getElementById('status-message');

    status.classList.remove('fail');

    fetchData()
        .then(data => {
            gender.textContent = data['results'][0]['gender'];
            first_name.textContent = data['results'][0]['name']['first'];
            last_name.textContent = data['results'][0]['name']['last'];
            age.textContent = data['results'][0]['dob']['age'];
            country.textContent = data['results'][0]['location']['country'];
            email.textContent = data['results'][0]['email'];
            console.log(data['results'][0]);
        })
        .catch(error => {
            container.classList.add('hidden');
            status.classList.remove('hidden');
            status.classList.add('fail');
            message.textContent = 'Something went wrong.';
        });
});