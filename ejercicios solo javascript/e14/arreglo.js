function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => imprimirArray(document.querySelector('#array').value))
}

function imprimirArray(array) {
    array = array.split(' ');
    array.forEach(element => {
        document.body.innerHTML += `${element}<br>`
    });
}

window.addEventListener('load', cargarPagina);