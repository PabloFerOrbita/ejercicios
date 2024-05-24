function cargarPagina() {
document.querySelector('button').addEventListener('click', () => {alert(fizzBuzz(document.querySelector('#numero').value))})
}

function fizzBuzz(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        return 'fizzbuzz';
    }
    if (numero % 3 == 0) {
        return 'fizz';
    }
    if (numero % 5 == 0) {
        return 'buzz';
    }

    return numero;
}

window.addEventListener('load', cargarPagina);