function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {alert(transcribir(document.querySelector('input').value))})
}

function transcribir(adn) {
    let arn = adn.toUpperCase().replaceAll('G', 'Y').replaceAll('C','G').replaceAll('Y','C').replaceAll('A', 'U').replaceAll('T','A');
    return arn;
    
}

window.addEventListener('load', cargarPagina);