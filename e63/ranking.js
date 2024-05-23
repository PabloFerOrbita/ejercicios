var preguntas = [{ pregunta: '¿Cuál es el apellido del protagonista de la trilogía original de Star Wars?', respuestaFalsa1: 'Starkiller', respuestaCorrecta: 'Skywalker', respuestaFalsa2: 'Solo' },
{ pregunta: '¿Cuál de estos Pokemon no es de tipo dragón?', respuestaFalsa1: 'Rayquaza', respuestaCorrecta: 'Charizard', respuestaFalsa2: 'Dragonite' },
{ pregunta: '¿Quién es el creador de los anillos de poder en la tierra media?', respuestaFalsa1: 'Sauron', respuestaCorrecta: 'Celebrimbor', respuestaFalsa2: 'Galadriel' },
{ pregunta: '¿En cuántos discos está dividido Final Fantasy IX?', respuestaFalsa1: '2', respuestaCorrecta: '4', respuestaFalsa2: '3' },
{ pregunta: '¿Cómo se llama el padre de Daenerys Targaryen en juego de tronos?', respuestaFalsa1: 'Rhaegar', respuestaCorrecta: 'Aerys', respuestaFalsa2: 'Aegon' },
{ pregunta: "¿Cuántos videojuegos de la franquicia Assassin's creed son protagonizados por Ezio Auditore?", respuestaFalsa1: '1', respuestaCorrecta: '4', respuestaFalsa2: '3' },
{ pregunta: '¿Cuál de estos actores ha interpretado a Batman?', respuestaFalsa1: 'Hugh Jackman', respuestaCorrecta: 'George Clooney', respuestaFalsa2: 'Jack Nicholson' },
{ pregunta: '¿Cuántas partes tiene el manga original de Dragon Ball?', respuestaFalsa1: '1', respuestaCorrecta: '2', respuestaFalsa2: '3' },
{ pregunta: '¿Cuál es el verdadero nombre del protagonista de Halo: el Jefe Maestro?', respuestaFalsa1: 'Jack', respuestaCorrecta: 'John', respuestaFalsa2: 'Desconocido' },
{ pregunta: '¿Cuál de las siguientes franquicias es DESARROLLADA por Nintendo?', respuestaFalsa1: 'Xenoblade Chronicles', respuestaCorrecta: 'The Legend of Zelda', respuestaFalsa2: 'Pókemon' }]
var tiempo;
var minutos;
var segundos;
var timer;
var radioFalso1 = '<input class="form-check-input respuesta" type="radio" name="respuestas" id="respuesta1">';
var radioCorrecto = '<input class="form-check-input respuesta correcto" type="radio" name="respuestas" id="respuesta2">';
var radioFalso2 = '<input class="form-check-input respuesta" type="radio" name="respuestas" id="respuesta2">';

function cronometro() {
    tiempo--;
    setCronometro();
    if (tiempo == 0) {
        comprobarRespuesta();
    }

}

function setCronometro() {
    minutos = Math.floor(tiempo / 60);
    segundos = tiempo % 60;
    $('#Cronometro').text(`${minutos <= 9 ? `0${minutos}` : minutos} : ${segundos <= 9 ? `0${segundos}` : segundos}`);
}
function cargarPagina() {
    generarPregunta();
    $('#siguiente').on('click', generarPregunta);
    $('.respuesta').on('click', (e) => { comprobarRespuesta(e.target) });
}





function generarPregunta() {
    tiempo = 30
    quitarAtributosYclases();
    setCronometro();
    timer = setInterval(cronometro, 1000);
    var respuestasSacadas = [];
    var pregunta = preguntas[Math.floor((Math.random()) * preguntas.length)];
    $('#pregunta').text(pregunta.pregunta);
    for (let i = 1; i <= 3; i++) {
        var respuesta = Math.floor((Math.random() * 3) + 1);
        while (respuestasSacadas.includes(respuesta)) {
            respuesta = Math.floor((Math.random() * 3) + 1);
        }
        switch (respuesta) {
            case 1:
                $(`#descripcion${i}`).text(pregunta.respuestaFalsa1);
                break;

            case 2:
                $(`#descripcion${i}`).text(pregunta.respuestaFalsa2);
                break;
            default:
                $(`#descripcion${i}`).text(pregunta.respuestaCorrecta);
                $(`#respuesta${i}`).addClass('correcta');

        }
        respuestasSacadas.push(respuesta);

    }

}

function quitarAtributosYclases() {
    $('.respuesta').attr('disabled', false);
    $('.respuesta').attr('checked', false);
    $('label').removeClass('text-success text-danger');
    $('.respuesta').removeClass('correcta');
}

function comprobarRespuesta(respuesta = '') {
    clearInterval(timer);
    $(`label[for="${$('.correcta').attr('id')}"]`).addClass('text-success');
    if (!$(respuesta).hasClass('correcta')) {
        $(`label[for="${$(respuesta).attr('id')}"]`).addClass('text-danger');
    }
    $('.respuesta').attr('disabled', true);

}

$(window).on('load', cargarPagina);