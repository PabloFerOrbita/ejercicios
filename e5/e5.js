var numeros = [];
var numerosOrdenados = [];
var numerosPares = [];
var numerosImpares = []
for (let i = 0; i < 10; i++) {
    let numero = prompt('introduce el número para el índice ' + i);
    numeros.push(numero);
}
var titulo = document.createElement('p');
titulo.innerText = 'Array original';
var indicesP = document.createElement('p');
var numerosP = document.createElement('p');
numeros.forEach((element, indice) => {
    if (element % 2 == 0) {
        numerosPares.push(element);
    } else {
        numerosImpares.push(element);
    }
    indicesP.innerText = indicesP.innerText + `${indice} `;
    numerosP.innerText = numerosP.innerText + `${element} `

});
document.body.appendChild(titulo);
document.body.appendChild(indicesP);
document.body.appendChild(numerosP);

let i = 0;
while (numerosPares.length > 0 && numerosImpares.length > 0) {
    if (i % 2 == 0) {
        numerosOrdenados.push(numerosPares.shift());
        if (numerosPares.length == 0) {
            numerosImpares.forEach(element => {
                numerosOrdenados.push(element);
            })
        }
    } else {
        numerosOrdenados.push(numerosImpares.shift());
    } if (numerosImpares.length == 0) {
        numerosPares.forEach(element => {
            numerosOrdenados.push(element);
        })
    }
    i++;
}
titulo = document.createElement('p');
titulo.innerText = 'Array resultante';
var indicesOrdenadosP = document.createElement('p');
var numerosOrdenadosP = document.createElement('p');

numerosOrdenados.forEach((element, indice) => {
    indicesOrdenadosP.innerText = indicesOrdenadosP.innerText + `${indice} `;
    numerosOrdenadosP.innerText = numerosOrdenadosP.innerText + `${element} `
})
document.body.appendChild(titulo);
document.body.appendChild(indicesOrdenadosP);
document.body.appendChild(numerosOrdenadosP);



