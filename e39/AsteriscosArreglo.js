var array = [1, 'palabra', '*', 3, '*', '*', '*'];

alert(numAstericos(array));
function numAstericos(array) {
    var asteriscos = 0;
    array.forEach(elemento => {
        elemento == '*' && asteriscos++;
    })
    return asteriscos;
}
