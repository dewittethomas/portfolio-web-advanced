function fetchData() {
    return new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json();
        })
        .then(data => {
        resolve(data);
        })
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const gender = document.getElementById('gender');
    const first_name = document.getElementById('first-name');
    const last_name = document.getElementById('last-name');
    const age = document.getElementById('age');
    const country = document.getElementById('country');
    const email = document.getElementById('email');

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
});