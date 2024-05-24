function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => alert(sumarArreglo(document.querySelector('#array').value, parseInt(document.querySelector('#posicion1').value), parseInt(document.querySelector('#posicion2').value))))
}

function sumarArreglo(array, posicion1, posicion2) {
    var suma = 0;
    array = array.split(' ');
    for (let i = posicion1 + 1; i < posicion2; i++) {
        suma += parseInt(array[i]);
    }
    return suma;

}

window.addEventListener('load', cargarPagina);