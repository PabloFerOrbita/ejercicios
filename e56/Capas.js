function cargarPagina(){
    $(document).on('mousemove', movimiento);
    $(document).on('mouseenter', mostrar);
    $(document).on('mouseleave', esconder);
}
var izquierda = 10;
function movimiento(e) {
    $('#imagen-cursor')
        .css('left', (e.clientX - 50) + 'px')
        .css('top', (e.clientY - 50) + 'px');

}

function esconder(){
    $('#imagen-cursor').addClass('d-none');
}

function mostrar(){
    $('#imagen-cursor').removeClass('d-none');
}

$(window).on('load', cargarPagina)