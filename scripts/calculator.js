const sum = function(a, b, c) {
    return a + b + c;
}

document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);
        const num3 = parseFloat(document.getElementById('number3').value);
        const status = document.querySelector('.status');
        const message = document.getElementById('status-message');

        status.classList.remove('success', 'fail');

        if (num1 && num2 && num3) {
            const numbers = [num1, num2, num3];
            const result = sum(...numbers);
            
            status.classList.remove('hidden');
            status.classList.add('success');
            message.textContent = `The result of your calculation is: ${result}`;
        } else {
            status.classList.remove('hidden');
            status.classList.add('fail');
            message.textContent = 'Fill in all fields correctly before calculating.';
        }
    });
});