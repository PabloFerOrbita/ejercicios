function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { contarRango(document.querySelector('#numero1').value, document.querySelector('#numero2').value) })
}

function contarRango(numero1, numero2) {
    for (let i = parseInt(numero1) + 1; i < numero2; i++) {
        document.body.innerHTML += i + ' ';
    }
}

window.addEventListener('click', cargarPagina);