document.getElementById('sumaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let suma = 0;
    let numero;
    do {
        numero = parseFloat(document.getElementById('numero').value);
        if (numero > 0) {
            suma += numero;
            document.getElementById('resultado').textContent = `La suma actual es: ${suma}`;
        } else if (numero <= 0) {
            document.getElementById('resultado').textContent = `El programa ha terminado. La suma total es: ${suma}`;
        }
    } while (numero > 0);
});
