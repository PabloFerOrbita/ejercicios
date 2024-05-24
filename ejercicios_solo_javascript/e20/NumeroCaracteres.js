function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(numeroDeCaracteres(document.querySelector('#caracter').value, document.querySelector('#palabra').value)) })
}

function numeroDeCaracteres(caracter, palabra) {
    return palabra.toUpperCase().split(caracter.toUpperCase()).length - 1;
}

window.addEventListener('load', cargarPagina);