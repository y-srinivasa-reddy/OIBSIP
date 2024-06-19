function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const checkboxes = document.querySelectorAll('input[name="convertTo"]:checked');
    const resultsList = document.getElementById('resultsList');

    resultsList.innerHTML = '';

    if (checkboxes.length === 0) {
        alert('Please select at least one conversion unit.');
        return;
    }

    checkboxes.forEach(checkbox => {
        const result = document.createElement('li');
        const outputUnit = checkbox.value;

        if (outputUnit === inputUnit) {
            result.textContent = `Already in ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
        } else {
            let convertedTemperature;
            switch (inputUnit) {
                case 'celsius':
                    convertedTemperature = convertFromCelsius(inputTemperature, outputUnit);
                    break;
                case 'fahrenheit':
                    convertedTemperature = convertFromFahrenheit(inputTemperature, outputUnit);
                    break;
                case 'kelvin':
                    convertedTemperature = convertFromKelvin(inputTemperature, outputUnit);
                    break;
            }
            result.textContent = `${convertedTemperature.toFixed(2)}° ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
        }

        resultsList.appendChild(result);
    });

    document.getElementById('results').style.display = 'block';
}

function convertFromCelsius(temp, toUnit) {
    switch (toUnit) {
        case 'fahrenheit':
            return (temp * 9/5) + 32;
        case 'kelvin':
            return temp + 273.15;
    }
}

function convertFromFahrenheit(temp, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (temp - 32) * 5/9;
        case 'kelvin':
            return (temp - 32) * 5/9 + 273.15;
    }
}

function convertFromKelvin(temp, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return temp - 273.15;
        case 'fahrenheit':
            return (temp - 273.15) * 9/5 + 32;
    }
}
