function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {
        alert(calcularImpuestos(document.querySelector('#edad').value, document.querySelector('#ingresos').value))
    })
}

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * (40 / 100);
    }
    return 0;
}

window.addEventListener('load', cargarPagina);