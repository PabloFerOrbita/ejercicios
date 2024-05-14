function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {
        alert(contrasenaValida(document.querySelector('#contrasena').value))
    })
}

function contrasenaValida(contrasena) {
    if (contrasena === '2Fj(jjbFsuj' || contrasena === 'eoZiugBf&g9') {
        return true;
    }

    return false;

}

window.addEventListener('load', cargarPagina);