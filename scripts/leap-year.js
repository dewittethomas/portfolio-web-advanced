function checkLeapYear(year, callback) {
    let isLeap;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        isLeap = true;
    } else {
        isLeap = false;
    }
    
    callback(isLeap);
}

document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');
    const status = document.querySelector('.status');
    const message = document.getElementById('status-message');

    submit.addEventListener('click', function() {
        const year = parseInt(document.getElementById('year').value);

        status.classList.remove('success', 'fail');

        if (year) {
            status.classList.remove('hidden');
            status.classList.add('success');

            checkLeapYear(year, function(isLeap) {
                if (isLeap) {
                    message.textContent = `The year ${year} is a leap year. So it consists of 366 days.`;
                } else {
                    message.textContent = `The year ${year} isn't a leap year. So it consists of 365 days.`;
                }
            });
        } else {
            status.classList.remove('hidden');
            status.classList.add('fail');
            message.textContent = `Please enter a year first.`;
        }
    });
});