var dado1 = 0;
var dado2 = 0;
var resultados = [];

for(let i = 0; i < 36000; i++){
    dado1 = Math.floor((Math.random() * 6) + 1 )
    dado2 = Math.floor((Math.random() * 6) + 1 )
    resultados.push(dado1 + dado2);
}

console.log(resultados);

