
function cargarPagina() {
    document.querySelectorAll('input').forEach(element => {
        element.addEventListener('blur', (e) => { validarCampo(e.target) });
    })
    document.querySelector('textarea').addEventListener('blur', (e) => { validarCampo(e.target) });
    document.querySelector('form').addEventListener('submit', validarFormulario);
}

function validarCampo(campo) {
    var mensaje = '';
    var validado = false;
    if (campo.id == 'nombre' || campo.id == 'correo' || campo.id == 'comentarios') {
        if (campo.value == '') {
            mensaje = "El campo es obligatorio";
        } else if (campo.id == 'correo') {
            if (campo.validity.typeMismatch) {
                mensaje = 'Debe introducir un correo válido';
            } else {
                validado = true
            }
        } else if (campo.id == 'comentarios') {
            if (campo.value.length > 50) {
                mensaje = 'El comentario debe tener un máximo de 50 caracteres';
            } else {
                validado = true;
            }
        } else {
            validado = true;
        }
    } else {
        if (campo.value.length < 6) {
            mensaje = 'La contraseña debe tener como mínimo 6 caracteres'
        } else if (!new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])', 'g').test(campo.value)) {
            mensaje = 'La contraseña debe tener al menos una minúscula, una mayúscula y un dígito'
        } else {
            validado = true;
        }

    }
    document.querySelector(`#mensajeError${campo.id}`).innerHTML = mensaje;
    return validado;
}

function validarFormulario(e) {
    var elementos = Array.from(e.target.querySelectorAll('input, textarea'));
    var errores = 0;
    elementos.forEach(element => {
        if (!validarCampo(element)) {
            errores++;
        }
    })
    if (errores > 0) {
        e.preventDefault();
    }
}

function mostrarMensaje(id, mensaje) {
    document.querySelector(`#mensajeError${id}`).innerHTML = mensaje;
}
window.addEventListener('click', cargarPagina);

