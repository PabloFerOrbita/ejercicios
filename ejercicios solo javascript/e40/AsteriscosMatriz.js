var matriz= [[1, 2, 3, '*'], ['*', '*', '*', 'estado'], ['a', 'a', 'a', 'a'], ['*', 3, 4, '*', '*']];

alert(numAstericos(matriz));
function numAstericos(matriz) {
    var asteriscos = 0;
    for(fila in matriz){
        matriz[fila].forEach(columna => {
            columna == '*' && asteriscos++;
        });
    }
    return asteriscos;
}
