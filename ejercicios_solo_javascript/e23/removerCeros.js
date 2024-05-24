function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => alert(removerCeros(document.querySelector('input').value)))
}

function removerCeros(array) {
    array = array.split(' ').join('').split(0).join('').split('');
   
    return array;

}

window.addEventListener('load', cargarPagina);