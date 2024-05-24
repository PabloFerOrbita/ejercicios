function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {alert(max(document.querySelector('input').value))})
}

function max(array) {
    array = array.split(' ');
    let maximo = 0;
    array.forEach(elemento => {
        parseInt(elemento) > maximo && (maximo = elemento);
    })

    return maximo;
}

window.addEventListener('load', cargarPagina);