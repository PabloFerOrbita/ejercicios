function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {alert(empiezanConA(document.querySelector('input').value))})
}

function empiezanConA(array){
    let arrayAes = [];
    array.split(' ').forEach(palabra => {
        (palabra.charAt(0).toUpperCase() == 'A' || palabra.charAt(0).toUpperCase() == 'Á') && arrayAes.push(palabra);
    })
    return arrayAes;
}

window.addEventListener('load', cargarPagina);