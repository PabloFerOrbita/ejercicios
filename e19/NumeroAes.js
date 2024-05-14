function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(numeroDeAes(document.querySelector('input').value)) })
}

function numeroDeAes(palabra) {
    return palabra.toUpperCase().split('A').length - 1;
}

window.addEventListener('load', cargarPagina);