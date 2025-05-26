document.addEventListener('DOMContentLoaded', function () {
    // Mostrar mensajes flash con SweetAlert2
    const flashMessage = document.getElementById('flash-message');
    if (flashMessage) {
        const category = flashMessage.getAttribute('data-category');
        const message = flashMessage.getAttribute('data-message');

        let icon = 'info';
        if (category === 'success') icon = 'success';
        if (category === 'error') icon = 'error';
        if (category === 'warning') icon = 'warning';

        Swal.fire({
            title: message,
            icon: icon,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    }

    // Botón de prueba para SweetAlert
    const testAlertBtn = document.getElementById('test-alert');
    if (testAlertBtn) {
        testAlertBtn.addEventListener('click', function () {
            Swal.fire({
                title: '¡Funciona!',
                text: 'SweetAlert2 está correctamente configurado.',
                icon: 'success',
                confirmButtonText: 'Genial'
            });
        });
    }
});

$(document).ready(function () {
    $('#topass').click(function () {
        var passwordField = $('#password');
        var passwordFieldType = passwordField.attr('type');

        // Cambia el color a rojo al hacer clic

        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
            $(this).css('color', 'red');
        } else {
            passwordField.attr('type', 'password');
            $(this).removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
            $(this).css('color', 'black');
        }
    });
});
