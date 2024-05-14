function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { sumarRango(parseInt(document.querySelector('#numero1').value), parseInt(document.querySelector('#numero2').value)) })
}

function sumarRango(numero1, numero2) {
    var suma = 0;
    for (let i = numero1; i <= numero2; i++) {
        suma += i;
    }
    document.body.innerHTML += suma;
}

window.addEventListener('load', cargarPagina);