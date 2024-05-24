function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {alert(min(document.querySelector('input').value))})
}

function min(array) {
    array = array.split(' ');
    let minimo = array[0];
    array.forEach(elemento => {
        parseInt(elemento) < minimo && (minimo = elemento);
    })

    return minimo;
}

window.addEventListener('load', cargarPagina);