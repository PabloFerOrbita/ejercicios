var parejaCartas = [];
var parejas = 0;
var levantadas = false;
var tiempo = 300;
var terminado = false;
var minutos = Math.floor(tiempo / 60);
var segundos = tiempo % 60;
var Relojminutos = tiempo / 60 <= 9 ? `0${minutos}` : minutos;
var RelojSegundos = tiempo % 60 <= 9 ? `0${segundos}` : segundos;
function cargarPagina() {

    $('#Ganador').text(`${Relojminutos} : ${RelojSegundos}`);
    $('img').on('click', revelarCarta);
    timer;

}


const timer = setInterval(() => {
    tiempo--;
    minutos = Math.floor(tiempo / 60);
    segundos = tiempo % 60;
    RelojSegundos = segundos <= 9 ? `0${segundos}` : segundos;
    Relojminutos = minutos <= 9 ? `0${minutos}` : minutos;
    $('#Ganador').text(`${Relojminutos} : ${RelojSegundos}`);
    if (tiempo == 0) {
        TerminarPartida();
    }



}, 1000)

function revelarCarta(e) {
    if (!$(e.target).hasClass('revelada') && !levantadas) {
        $(e.target).attr('src', `img/${$(e.target).attr('class').split(' ')[2]}.jpg`)
        $(e.target).addClass('revelada');
        parejaCartas.push(e.target)
    }
    if (parejaCartas.length == 2) {
        levantadas = true;
        comprobarPareja();
    }
}

function comprobarPareja() {
    if ($(parejaCartas[0]).attr('class').split(' ')[2] == $(parejaCartas[1]).attr('class').split(' ')[2]) {
        parejas++;
        parejaCartas = [];
        levantadas = false;
        comprobarFinal();
    } else {
        $(parejaCartas[0]).removeClass('revelada')
        $(parejaCartas[1]).removeClass('revelada')
        setTimeout(() => {
            levantadas = false;
            $(parejaCartas[0]).attr('src', `img/Card_back.png`);
            $(parejaCartas[1]).attr('src', `img/Card_back.png`);
            parejaCartas = [];
        }, 500);
    }
}


function comprobarFinal() {
    if (parejas == 6) {
        terminado = true;
        TerminarPartida();
    }
}

function TerminarPartida() {
    clearInterval(timer);
    terminado ? ($('#Ganador').text('¡¡¡Has Ganado!!!')) : ($('#Ganador').text('¡¡¡Has Perdido!!!'))
}

$(window).on('load', cargarPagina);