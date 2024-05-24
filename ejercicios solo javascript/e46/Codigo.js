var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = 23
var letra = 'T'

if (numero < 0 || numero > 99999999) {
    alert('El número no es válido')
} else {
    var letraAsignada = letras[numero % 23];
    letraAsignada != letra ? alert('la letra indicada no es la correcta') : alert('El número y la letra del dni son correctos');
}
