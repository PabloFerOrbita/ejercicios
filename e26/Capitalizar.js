function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(capitalizar(document.querySelector('input').value)) })
}

function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1);

}
window.addEventListener('load', cargarPagina);