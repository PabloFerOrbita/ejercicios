function cargarPagina() {
    $(document).on('mousemove', movimiento);
}
function movimiento(e) {
    var x = $('.ojo').offset().left + ($('.ojo').width());
    var y = $('.ojo').offset().top + ($('.ojo').height());
    var radianes = Math.atan2(e.pageX - x, e.pageY - y);
    var rotacion = (radianes * (180 / Math.PI) * (-1)) + 180;
    $('.ojo').css({ transform: `rotate(${rotacion}deg)` });

}

$(window).on('load', cargarPagina);