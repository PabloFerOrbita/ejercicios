function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {alert(terminanConS(document.querySelector('input').value))})
}

function terminanConS(array){
    let arraySes = [];
    array.split(' ').forEach(palabra => {
        palabra.charAt(palabra.length - 1).toUpperCase() == 'S' && arraySes.push(palabra);
    })
    return arraySes;
}

window.addEventListener('load', cargarPagina);