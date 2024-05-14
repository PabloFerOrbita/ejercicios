function cargarPagina(){
document.querySelector('button').addEventListener('click', () => {alert(password(document.querySelector('input').value))})
}

function password(palabra) {
    return palabra.toLowerCase().replaceAll('a', 4).replaceAll('e', 3).replaceAll('i', 1).replaceAll('o', 0);
}

window.addEventListener('load', cargarPagina);