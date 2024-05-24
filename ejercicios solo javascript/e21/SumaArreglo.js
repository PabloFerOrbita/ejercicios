function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => alert(sumarArreglo(document.querySelector('input').value)))
}

function sumarArreglo (array){
    var suma = 0;
    array = array.split(' ');
    array.forEach(element => {
        suma += parseInt(element);
    })
    return suma;
    
}

window.addEventListener('load', cargarPagina);