var imagenes = ['imagen1', 'imagen2', 'imagen3', 'imagen4']
var imagenActual = 0;

function cargarPagina() {
    $('#flechaAtras').on('click', imagenAnterior);
    $('#flechaAlante').on('click', imagenSiguiente);
}

function imagenSiguiente() {
    imagenActual++;
    imagenActual > imagenes.length - 1 && (imagenActual = 0);
    $('#imagen').attr('src', `img/${imagenes[imagenActual]}.jpg`);

}

function imagenAnterior() {
    imagenActual--;
    imagenActual < 0 && (imagenActual = imagenes.length - 1)
    $('#imagen').attr('src', `img/${imagenes[imagenActual]}.jpg`);
}

$(window).on('load', cargarPagina);