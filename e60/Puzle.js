var imagenes = ['<img id="img3" src="./img/3.jpg" class="w-100 h-100">', '<img id="img10" src="./img/10.jpg" class="w-100 h-100">', '<img id="img15" src="./img/15.jpg" class="w-100 h-100">', '<img id="img11" src="./img/11.jpg" class="w-100 h-100">',
    '<img id="img13" src="./img/13.jpg" class="w-100 h-100">', '<img id="img4" src="./img/4.jpg" class="w-100 h-100">', ' <img id="img5" src="./img/5.jpg" class="w-100 h-100">', '<img id="img9" src="./img/9.jpg" class="w-100 h-100">',
    '<img id="img6" src="./img/6.jpg" class="w-100 h-100">', '<img id="img8" src="./img/8.jpg" class="w-100 h-100">', '<img id="img1" src="./img/1.jpg" class="w-100 h-100">', '<img id="img7" src="./img/7.jpg" class="w-100 h-100">',
    '<img id="img2" src="./img/2.jpg" class="w-100 h-100">', '<img id="img12" src="./img/12.jpg" class="w-100 h-100">', '<img id="img14" src="./img/14.jpg" class="w-100 h-100">']
function cargarPagina() {
    $('.celda').on('click', comprobarVacia);
    $('#Reiniciar').on('click', reiniciar);
}

function comprobarVacia(e) {
    if ($(`#${parseInt(e.currentTarget.id) - 1}`)?.hasClass('vacia')) {
        moverFoto(e.currentTarget, ($(`#${parseInt(e.currentTarget.id) - 1}`)));
        return;
    } if ($(`#${parseInt(e.currentTarget.id) + 1}`)?.hasClass('vacia')) {
        moverFoto(e.currentTarget, ($(`#${parseInt(e.currentTarget.id) + 1}`)));
        return;
    }
    if ($(`#${parseInt(e.currentTarget.id) + 4}`)?.hasClass('vacia')) {
        moverFoto(e.currentTarget, ($(`#${parseInt(e.currentTarget.id) + 4}`)));
        return;
    }
    if ($(`#${parseInt(e.currentTarget.id) - 4}`)?.hasClass('vacia')) {
        moverFoto(e.currentTarget, ($(`#${parseInt(e.currentTarget.id) - 4}`)));
        return;
    }
}


function moverFoto(celda, vacia) {
    imagen = $(celda).children().first();
    $(celda).empty();
    $(celda).addClass('vacia');
    $(vacia).append(imagen);
    $(vacia).removeClass('vacia');
    comprobarCorrecto();

}
function comprobarCorrecto() {
    var completo = true;
    $('.celda').each((idx, element) => {
        if (element.id != $(element).children().first().attr('id')?.replace('img', '') && !$(element).hasClass('vacia')) {
            completo = false;
            return;
        }
    })
    if (completo) {
        $('#terminado').text('Puzle terminado');
        $('.celda').off('click');
    }

}

function reiniciar() {
    $('#terminado').text('');
    $('.celda').empty();
    $('.celda').removeClass('vacia');
    for (let i = 1; i <= 15; i++) {
        $(`#${i}`).append(imagenes[i - 1]);
    }
    $('#16').addClass('vacia');
    $('.celda').on('click', comprobarVacia);

}


$(window).on('load', cargarPagina);