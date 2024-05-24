
var turno;
var celdasRellenas;
var jugador1;
var jugador2;
function cargarPagina() {
    $('#Reiniciar').on('click', iniciarTablero);
    iniciarTablero();
}

function iniciarTablero() {
    turno = 1;
    celdasRellenas = 0;
    $('.celda').on('click', manejarTurno).empty().removeClass('jugador1 jugador2');
    $('#Ganador').empty();
}

function pintarX(id) {
    $(`#${id}`).append('<i class="bi bi-x-lg text-danger h1"></i>').addClass('jugador1');
}

function pintarO(id) {
    $(`#${id}`).append('<i class="bi bi-circle text-primary h1"></i>').addClass('jugador2');
}

function manejarTurno(e) {
    if (!$(e.target).hasClass('jugador1') && !$(e.target).hasClass('jugador2')) {
        switch (turno) {
            case 1:
                pintarX(e.target.id);
                turno = 2;
                break;
            default:
                pintarO(e.target.id);
                turno = 1;
        }
        celdasRellenas++;
    }
    comprobarTablero()

}

function comprobarTablero() {
    console.log(comprobarFila());
    console.log(comprobarColumna());
    console.log(comprobarDiagonal());

    if (calcularVictoria(comprobarFila()) || calcularVictoria(comprobarColumna()) || calcularVictoria(comprobarDiagonal())) {
        return
    }
    if (celdasRellenas == 9) {
        TerminarPartida('empate')
    }

}

function calcularVictoria(ganador) {
    if (ganador == 1 || ganador == 2) {
        TerminarPartida(ganador);
        return true;
    }
    return false;
}

function comprobarFila() {
    for (var i = 1; i <= 9; i = i + 3) {
        jugador1 = 0;
        jugador2 = 0;
        for (let j = i; j <= (i + 2); j++) {
            if ($(`#${j}`).hasClass('jugador1')) {
                jugador1++;
            } else if ($(`#${j}`).hasClass('jugador2')) {
                jugador2++;
            }
        }
        if (jugador1 == 3) {
            return 1;
        } else if (jugador2 == 3) {
            return 2;
        }
    }
    return 0;
}

function comprobarColumna() {
    for (var i = 1; i <= 3; i++) {
        jugador1 = 0;
        jugador2 = 0;
        for (let j = i; j <= (i + 6); j = j + 3) {
            if ($(`#${j}`).hasClass('jugador1')) {
                jugador1++;
            } else if ($(`#${j}`).hasClass('jugador2')) {
                jugador2++;
            }
        }
        if (jugador1 == 3) {
            return 1;
        } else if (jugador2 == 3) {
            return 2;
        }
    }
    return 0;
}

function comprobarDiagonal() {
    if ($('#5').hasClass('jugador1')) {
        if (($('#1').hasClass('jugador1') && $('#9').hasClass('jugador1')) || ($('#3').hasClass('jugador1') && $('#7').hasClass('jugador1'))) {
            return 1;
        }
    }
    if ($('#5').hasClass('jugador2')) {
        if (($('#1').hasClass('jugador2') && $('#9').hasClass('jugador2')) || ($('#3').hasClass('jugador2') && $('#7').hasClass('jugador2'))) {
            return 2;
        }
    }
    return 0;
}

function TerminarPartida(ganador) {
    if (ganador == 'empate') {
        $('#Ganador').html('Ha habido un <strong>empate</strong>');
    } else {
        $('#Ganador').html(`Ha ganado el<span class = "${ganador == 1 ? 'text-danger' : 'text-primary'}"> jugador ${ganador}</span>`);
    }

    $('.celda').off('click');

}


$(window).on('load', cargarPagina);