const currency = 'EUR';

function fetchPrice() {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice/EUR.json")
        .then(response => {
            return response.json();
        })
        .catch(error => {
            throw error;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const bitcoin = document.getElementById('bitcoin');
    const container = document.querySelector('.input-container');
    const status = document.querySelector('.status');
    const message = document.getElementById('status-message');

    status.classList.remove('fail');

    fetchPrice()
        .then(data => {
            bitcoin.textContent = `€ ${data['bpi'][currency]['rate']}`;
        })
        .catch(error => {
            container.classList.add('hidden');
            status.classList.remove('hidden');
            status.classList.add('fail');
            message.textContent = 'Something went wrong.';
        });
});
