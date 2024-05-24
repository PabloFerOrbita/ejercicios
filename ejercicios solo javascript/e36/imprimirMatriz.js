var matriz = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
function cargarPagina() {
    imprimirMatriz(matriz);
}

function imprimirMatriz(matriz) {
    for (let fila in matriz) {
        matriz[fila].forEach(columna => {
            document.querySelector('div').innerHTML += columna + ' ';
        })
        document.querySelector('div').innerHTML += '<br>';
    }
}

window.addEventListener('load', cargarPagina)

