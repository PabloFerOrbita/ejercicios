var filas = [];
var capicuaMaximo = 0;
var adyacentes = [];
for (let i = 0; i < 10; i++) {
    var columnas = [];
    for (let i = 0; i < 9; i++) {
        let numero = Math.floor(Math.random() * 1000) + 1;
        if (esCapicua(numero)) {
            if (numero > capicuaMaximo) {
                capicuaMaximo = numero;

            }
        }
        columnas.push(numero);
    }
    filas.push(columnas);
}

filas.forEach((fila, indiceFila) => {
    fila.forEach((columna, indiceColumna) => {
        if (columna == capicuaMaximo) {
            if (indiceColumna !== 0) {
                adyacentes.push((indiceFila) + ' ' + (indiceColumna - 1));
                indiceFila !== 0 && adyacentes.push((indiceFila - 1) + ' ' + (indiceColumna - 1));
                indiceFila !== filas.length - 1 && adyacentes.push((indiceFila + 1) + ' ' + (indiceColumna - 1));
            } if (indiceColumna !== filas[0].length - 1) {
                adyacentes.push(indiceFila + ' ' + (indiceColumna + 1));
                indiceFila !== 0 && adyacentes.push((indiceFila - 1) + ' ' + (indiceColumna + 1));
                indiceFila !== filas.length - 1 && adyacentes.push((indiceFila + 1) + ' ' + (indiceColumna + 1));
            }
            indiceFila !== 0 && adyacentes.push((indiceFila - 1) + ' ' + indiceColumna);
            indiceFila !== filas.length - 1 && adyacentes.push((indiceFila + 1) + ' ' + indiceColumna);

        }
    })
})

var tabla = document.createElement('table');
var cuerpoTabla = document.createElement('tbody');
filas.forEach((fila, indiceFila) => {
    var columnas = document.createElement('tr');
    fila.forEach((columna, indiceColumna) => {
        var celda = document.createElement('td');
        celda.innerText = columna;
        adyacentes.includes(indiceFila + ' ' + indiceColumna) && (celda.style.color = 'green');
        columna == capicuaMaximo && (celda.style.color = 'blue');
        columnas.append(celda);
    })
    cuerpoTabla.append(columnas);
})
tabla.append(cuerpoTabla);
document.body.appendChild(tabla);

function esCapicua(numero) {
    numero = numero.toString();
    return numero.split("").reverse().join("") == numero;
}