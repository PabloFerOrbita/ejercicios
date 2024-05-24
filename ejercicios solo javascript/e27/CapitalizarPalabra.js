function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(capitalizar(document.querySelector('input').value)) })
}

function capitalizar(frase) {
    let arrayFrase = [];
    frase.split(' ').forEach(element => {
        arrayFrase.push(element.charAt(0).toUpperCase() + element.substring(1));
    })
    return arrayFrase.join(' ');

}
window.addEventListener('load', cargarPagina);