
document.addEventListener('DOMContentLoaded', function() {
    const valuesArray = [];
    let valuesSum = 0;
    let valuesAverage = 0;
    let userValue = document.getElementById('userValue');
    let errorDisplay = document.getElementById('errorDisplay');
    let averageDisplay = document.getElementById('averageDisplay');
    let arrayDisplay = document.getElementById('arrayDisplay');

    document.getElementById('getValuesForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let inputValue = userValue.value;
        inputValue = parseFloat(inputValue);

        valuesArray.push(inputValue);

        userValue.value = '';
        arrayDisplay.innerText = valuesArray;

        if (valuesArray.length > 1) {
            errorDisplay.innerText = '';
        }
    })

    document.getElementById('btnReset').addEventListener('click', function(e) {
        e.preventDefault();

        valuesArray.length = 0;

        userValue.value = '';
        arrayDisplay.innerText = '';
        errorDisplay.innerText = '';
        averageDisplay.innerText = '';
    })

    document.getElementById('averageForm').addEventListener('submit', function(e) {
        e.preventDefault();

        if (valuesArray.length < 2) {
            errorDisplay.innerText = 'Please, insert at least 2 values.';
        } else {
            valuesSum = 0;
            valuesArray.forEach(item => {
                valuesSum += item;
            })

            valuesAverage = valuesSum / valuesArray.length;
            averageDisplay.innerText = valuesAverage.toFixed(1);
        }
    })


})