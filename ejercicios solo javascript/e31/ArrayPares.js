function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(pares(document.querySelector('input').value)) })
}

function pares(array) {
    arrayPares = [];
    array.split(' ').forEach(numero => {
        numero % 2 == 0 && arrayPares.push(numero);
    })

    return arrayPares;
}

window.addEventListener('click', cargarPagina)