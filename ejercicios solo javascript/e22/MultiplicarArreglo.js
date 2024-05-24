function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => alert(multiplicarArreglo(document.querySelector('input').value)))
}

function multiplicarArreglo(array) {
    var producto = 1;
    array = array.split(' ');
    array.forEach(element => {
        producto *= parseInt(element);
    })
    return producto;

}

window.addEventListener('load', cargarPagina);