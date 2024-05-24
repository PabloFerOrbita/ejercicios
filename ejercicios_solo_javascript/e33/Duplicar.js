function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(duplicar(document.querySelector('input').value)) })
}

function duplicar(array) {
    arrayDoble = [];
    array.split(' ').forEach(numero => {
        arrayDoble.push(numero * 2);
    })

    return arrayDoble;
}

window.addEventListener('load', cargarPagina)