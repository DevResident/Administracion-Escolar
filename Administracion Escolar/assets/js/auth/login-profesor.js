// Función para limitar la longitud de los campos
function limitInputLength(inputElement, minLength, maxLength) {
    inputElement.addEventListener('input', function () {
        // Limitar la longitud máxima
        if (inputElement.value.length > maxLength) {
            inputElement.value = inputElement.value.slice(0, maxLength);
        }

        // Validar la longitud mínima (opcional: mostrar mensaje de error)
        if (inputElement.value.length < minLength && inputElement.value.length > 0) {
            inputElement.setCustomValidity(`Este campo debe tener al menos ${minLength} caracteres.`);
        } else {
            inputElement.setCustomValidity('');
        }
    });
}

// Aplicar la limitación a los campos relevantes
document.addEventListener('DOMContentLoaded', function () {
    const rfcInput = document.getElementById('rfc');
    const employeeNumberInput = document.getElementById('employee-number');

    // Limitar el RFC a 13 caracteres
    limitInputLength(rfcInput, 13, 13);

    // Limitar el número de trabajador a 6 caracteres
    limitInputLength(employeeNumberInput, 6, 6);
});

// Validar el formulario al enviarlo
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores de los campos
    const rfc = document.getElementById('account-rfc').value.trim();
    const noTrabajador = document.getElementById('password').value.trim();

    // Validar número de cuenta (9 dígitos)
    if (noTrabajador.length !== 13 || !/^\d{9}$/.test(noTrabajador)) {
    showError('El número de cuenta debe tener exactamente 9 dígitos.');
    return;
    }

    // Validar contraseña (entre 8 y 16 caracteres)
    if (password.length < 8 || password.length > 16) {
    showError('La contraseña debe tener entre 8 y 16 caracteres.');
    return;
    }

    // Si todo es válido, mostrar un mensaje de éxito (o redirigir a otra página)
    // alert('Inicio de sesión exitoso');
    // Aquí puedes redirigir al usuario a otra página:
    // window.location.href = 'dashboard.html';
});