let suma = 0;

document.getElementById('sumaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el valor del número ingresado
    const numero = parseFloat(document.getElementById('numero').value);

    if (numero > 0) {
        // Si el número es positivo, sumarlo a la variable 'suma'
        suma += numero;
        document.getElementById('resultado').textContent = `La suma actual es: ${suma}`;
    } else {
        // Si el número es negativo o cero, terminar el programa
        document.getElementById('resultado').textContent = `El programa ha terminado. La suma total es: ${suma}`;
        // Desactivar el formulario para evitar más entradas
        document.getElementById('sumaForm').querySelector('button').disabled = true;
    }

    // Limpiar el campo de entrada
    document.getElementById('numero').value = '';
    document.getElementById('numero').focus();
});
