// Función para limitar la longitud de los campos
function limitInputLength(inputElement, maxLength) {
    inputElement.addEventListener('input', function () {
        if (inputElement.value.length > maxLength) {
            inputElement.value = inputElement.value.slice(0, maxLength);
        }
    });
}

// Función para mostrar mensajes de error
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}