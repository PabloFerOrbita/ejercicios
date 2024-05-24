function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(posiciones(document.querySelector('input').value)) })
}

function posiciones(array) {
    arrayPares = [];
    array.split(' ').forEach((numero, posicion) => {
        numero % 2 == 0 && arrayPares.push(posicion);
    })

    return arrayPares;
}

window.addEventListener('load', cargarPagina)