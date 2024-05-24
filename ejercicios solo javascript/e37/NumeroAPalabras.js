var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

alert(numeroAPalabras(array));

function numeroAPalabras(array) {
    let arrayPalabras = []
    array.forEach(numero => {
        switch (numero) {
            case 1:
                arrayPalabras.push('uno');
                break;
            case 2:
                arrayPalabras.push('dos');
                break;
            case 3:
                arrayPalabras.push('tres');
                break;
            case 4:
                arrayPalabras.push('cuatro');
                break;
            case 5:
                arrayPalabras.push('cinco');
                break;
            case 6:
                arrayPalabras.push('seis');
                break;
            case 7:
                arrayPalabras.push('siete');
                break;
            case 8:
                arrayPalabras.push('ocho');
                break;
            case 9:
                arrayPalabras.push('nueve');
                break;
            default:
                arrayPalabras.push('cero');
        }
    })
    return arrayPalabras;
}
