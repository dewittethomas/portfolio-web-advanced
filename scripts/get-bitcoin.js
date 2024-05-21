const currency = "EUR";

function fetchPrice() {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice/EUR.json")
        .then(response => {
            return response.json();
        })
}

document.addEventListener('DOMContentLoaded', function() {
    const bitcoin = document.getElementById('bitcoin');

    fetchPrice()
        .then(data => {
            bitcoin.textContent = `€ ${data["bpi"][currency]["rate"]}`;
        })
});
