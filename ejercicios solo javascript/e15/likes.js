function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => { alert(numeroLikes(document.querySelector('#likes').value)) })
}

function numeroLikes(likes) {
    if (likes.length <= 3) {
        return likes
    }
    let digitos = likes.length - (likes.length <= 6 ? 3 : 6);
    let likesN = likes.split('', digitos);
    return likesN.join('') + (likes.length <= 6 ? 'K' : 'M');

}

window.addEventListener('load', cargarPagina);