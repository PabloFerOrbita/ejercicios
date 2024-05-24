var array = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'palabra'];

alert(palabrasANumeros(array));

function palabrasANumeros(array) {
    let arrayNumeros = []
    array.forEach(palabra => {
        switch (palabra.toUpperCase()) {
            case 'CERO':
                arrayNumeros.push(0);
                break;
            case 'UNO':
                arrayNumeros.push(1);
                break;
            case 'DOS':
                arrayNumeros.push(2);
                break;
            case 'TRES':
                arrayNumeros.push(3);
                break;
            case 'CUATRO':
                arrayNumeros.push(4);
                break;
            case 'CINCO':
               arrayNumeros.push(5);
                break;
            case 'SEIS':
                arrayNumeros.push(6);
                break;
            case 'SIETE':
                arrayNumeros.push(7);
                break;
            case 'OCHO':
                arrayNumeros.push(8);
                break;
            case 'NUEVE':
                arrayNumeros.push(9);
                break;
            default:
                arrayNumeros.push((-1));
        }
    })
    return arrayNumeros;
}