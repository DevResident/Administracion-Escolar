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
    const accountNumber = document.getElementById('account-number');
    const birthdateAccount = document.getElementById('birthdate');
    const passwordAccount = document.getElementById('password');

    // Limitar el número de cuenta a exactamente 9 caracteres
    limitInputLength(accountNumber, 9, 9);

    // Limitar la fecha de nacimiento a exactamente 8 caracteres
    limitInputLength(birthdateAccount, 8, 8);

    // Limitar la contraseña entre 8 y 16 caracteres
    limitInputLength(passwordAccount, 8, 16);
});

// Alternar visibilidad de la contraseña
document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Cambiar el ícono del botón
    this.textContent = type === 'password' ? '👁️' : '🙈';
});   

// Validar el formulario al enviarlo
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores de los campos
    const accountNumber = document.getElementById('account-number').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar número de cuenta (9 dígitos)
    if (accountNumber.length !== 9 || !/^\d{9}$/.test(accountNumber)) {
    showError('El número de cuenta debe tener exactamente 9 dígitos.');
    return;
    }

    // Validar fecha de nacimiento (8 dígitos, formato AAAAMMDD)
    if (birthdate.length !== 8 || !/^\d{8}$/.test(birthdate)) {
    showError('La fecha de nacimiento debe tener exactamente 8 dígitos (formato AAAAMMDD).');
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