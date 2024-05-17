function cargarPagina() {
    $(document).on('mousemove', movimiento);
}
function movimiento(e) {
    var x= $(e).offset().left + ($('#ojo').width() / 2);

}

$(window).on('load', cargarPagina);