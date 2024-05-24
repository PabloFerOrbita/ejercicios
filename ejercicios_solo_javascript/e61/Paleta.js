function cargarPagina(){
    $('.celda').on('click', cambiarColor);
}
function cambiarColor(e) {
    $('body').css('backgroundColor', $(e.target).css('backgroundColor'));
}

$(window).on('click', cargarPagina)