var preguntas = [{ pregunta: '¿Cuál es el apellido del protagonista de la trilogía original de Star Wars?', respuestaFalsa1: 'Starkiller', respuestaCorrecta: 'Skywalker', respuestaFalsa2: 'Solo' },
{ pregunta: '¿Cuál de estos Pokemon no es de tipo dragón?', respuestaFalsa1: 'Rayquaza', respuestaCorrecta: 'Charizard', respuestaFalsa2: 'Dragonite' },
{ pregunta: '¿Quién es el creador de los anillos de poder en la tierra media?', respuestaFalsa1: 'Sauron', respuestaCorrecta: 'Celebrimbor', respuestaFalsa2: 'Galadriel' },
{ pregunta: '¿En cuántos discos está dividido Final Fantasy IX?', respuestaFalsa1: '2', respuestaCorrecta: '4', respuestaFalsa2: '3' },
{ pregunta: '¿Cómo se llama el padre de Daenerys Targaryen en juego de tronos?', respuestaFalsa1: 'Rhaegar', respuestaCorrecta: 'Aerys', respuestaFalsa2: 'Aegon' },
{ pregunta: "¿Cuántos videojuegos de la franquicia Assassin's creed son protagonizados por Ezio Auditore?", respuestaFalsa1: '1', respuestaCorrecta: '4', respuestaFalsa2: '3' },
{ pregunta: '¿Cuál de estos actores ha interpretado a Batman?', respuestaFalsa1: 'Hugh Jackman', respuestaCorrecta: 'George Clooney', respuestaFalsa2: 'Jack Nicholson' },
{ pregunta: '¿Cuántas partes tiene el manga original de Dragon Ball?', respuestaFalsa1: '2', respuestaCorrecta: '1', respuestaFalsa2: '3' },
{ pregunta: '¿Cuál es el verdadero nombre del protagonista de Halo: el Jefe Maestro?', respuestaFalsa1: 'Jack', respuestaCorrecta: 'John', respuestaFalsa2: 'Desconocido' },
{ pregunta: '¿Cuál de las siguientes franquicias es DESARROLLADA por Nintendo?', respuestaFalsa1: 'Xenoblade Chronicles', respuestaCorrecta: 'The Legend of Zelda', respuestaFalsa2: 'Pókemon' }]
var tiempo;
var minutos;
var segundos;
var timer;
var radioFalso1;
var radioCorrecto;
var radioFalso2;
var puntuacion;
var pasar;
var preguntasContestadas;


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
    mostrarPreguntas();

}

function setPreguntas() {
    radioFalso1 = $('<input class="form-check-input respuesta" type="radio" name="respuestas" id="">');
    radioCorrecto = $('<input class="form-check-input respuesta correcta" type="radio" name="respuestas" id="">');
    radioFalso2 = $('<input class="form-check-input respuesta" type="radio" name="respuestas" id="">');
}




function generarPregunta() {
    clearTimeout(siguiente);
    $('#paraSiguiente').text('');
    if (preguntasContestadas.length == preguntas.length) {
        sacarFormulario();
        return;
    }
    tiempo = 30
    quitarRadiosYcolores();
    setPreguntas();
    setCronometro();
    var respuestasSacadas = [];
    var pregunta = preguntas[Math.floor((Math.random()) * preguntas.length)];
    while (preguntasContestadas.includes(pregunta)) {
        pregunta = preguntas[Math.floor((Math.random()) * preguntas.length)];
    }
    $('#pregunta').text(pregunta.pregunta);
    for (let i = 1; i <= 3; i++) {
        var respuesta = Math.floor((Math.random() * 3) + 1);
        while (respuestasSacadas.includes(respuesta)) {
            respuesta = Math.floor((Math.random() * 3) + 1);
        }
        switch (respuesta) {
            case 1:
                $(`#descripcion${i}`).text(pregunta.respuestaFalsa1);
                $(radioFalso1).attr('id', `radio${i}`);
                $(`#respuesta${i}`).append(radioFalso1);
                break;

            case 2:
                $(`#descripcion${i}`).text(pregunta.respuestaFalsa2);
                $(radioFalso2).attr('id', `radio${i}`);
                $(`#respuesta${i}`).append(radioFalso2);
                break;
            default:
                $(`#descripcion${i}`).text(pregunta.respuestaCorrecta);
                $(radioCorrecto).attr('id', `radio${i}`);
                $(`#respuesta${i}`).append(radioCorrecto);

        }
        respuestasSacadas.push(respuesta);

    }
    $('.respuesta').on('click', (e) => { comprobarRespuesta(e.target) });
    preguntasContestadas.push(pregunta);
    $('#cuenta').text(`${preguntasContestadas.length}/10`);
    timer = setInterval(cronometro, 1000);
}

function quitarRadiosYcolores() {
    $('.respuesta').remove();
    $('label').removeClass('text-success text-danger');
}

function comprobarRespuesta(respuesta = '') {
    clearInterval(timer);
    $(`label[for="${$('.correcta').attr('id')}"]`).addClass('text-success');
    if (!$(respuesta).hasClass('correcta')) {
        $(`label[for="${$(respuesta).attr('id')}"]`).addClass('text-danger');
    } else {
        puntuacion += tiempo;
    }
    var paraSiguiente = 3;
    $('#paraSiguiente').text('Siguiente pregunta en ' + paraSiguiente);
    siguiente = setInterval(() => {

        paraSiguiente--;
        $('#paraSiguiente').text('Siguiente pregunta en ' + paraSiguiente);
        if (paraSiguiente == 0) {
            generarPregunta()
        }

    }, 1000);
    $('.respuesta').attr('disabled', true);
}

function sacarFormulario() {
    $('#cuerpo').empty();
    $('#cuerpo').append('<form id="guardarPuntuacion" class="h-25 d-flex flex-column justify-content-center align-items-center g-3"></form>');
    $('#guardarPuntuacion').append(`<h1>Has obtenido ${puntuacion} puntos</h1>`);
    $('#guardarPuntuacion').append('<label for="nombre" class=" form-label">Introduce un nombre para guardar tu puntuación</label>');
    $('#guardarPuntuacion').append('<input type="text" id="nombre" class="form-control mb-4"></input>');
    $('#guardarPuntuacion').append('<button type="submit" class="btn btn-success">Guardar</button>');
    $('#guardarPuntuacion').on('submit', guardarPuntuaciones);
}

function guardarPuntuaciones(e) {
    e.preventDefault();
    let puntuaciones = getPuntuaciones();
    puntuaciones.push({ nombre: $('#nombre').val(), puntuacion: puntuacion });
    localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones));
    mostrarTop();
}

function getPuntuaciones() {
    let puntuaciones = localStorage.getItem('puntuaciones');
    if (puntuaciones == null) {
        return [];
    }
    return JSON.parse(puntuaciones);

}

function mostrarTop() {
    $('#cuerpo').empty();
    $('#cuerpo').append('<h1>TOP PUNTUACIONES</h1>');
    $('#cuerpo').append('<div class="w-25" id="contenedor"></div>');
    $('#contenedor').append('<table class="table text-center" id="puntuaciones"></table>');
    $('#puntuaciones').append('<thead><tr><th>Posicion</th><th>Nombre</th><th>Puntuacion</th>')
    let puntuaciones = getPuntuaciones();
    puntuaciones.sort((a, b) => b.puntuacion - a.puntuacion);
    puntuaciones = puntuaciones.slice(0, 10);
    $('#puntuaciones').append('<tbody id="top"></tbody>')
    puntuaciones.forEach((element, index) => {
        $('#top').append(`<tr><td>${index + 1}</td><td>${element.nombre}</td><td>${element.puntuacion}</td>`)
    })
    $('#cuerpo').append('<button type="button" id="resetear" class="btn btn-primary">Volver a intentarlo</button>');
    $('#resetear').on('click', mostrarPreguntas);
}

function mostrarPreguntas() {
    puntuacion = 0;
    preguntasContestadas = [];
    $('#cuerpo').empty();
    $('#cuerpo').append('<h1 id="Cronometro" class="fw-bold"></h1>');
    $('#cuerpo').append('<h1 id="pregunta"></h1>');
    $('#cuerpo').append('<div id="respuestas" class="w-50 h-25 d-flex flex-column justify-content-center align-items-center gap-3">');
    $('#cuerpo').append('<button class="btn btn-primary" id="siguiente">Siguiente</button>');
    $('#cuerpo').append('<p id="cuenta"></p>')
    for (let i = 1; i <= 3; i++) {
        $('#respuestas').append(`<div class="form-check" id="respuesta${i}"><label class="form-check-label" for="radio${i}" id="descripcion${i}"></label></div>`);
    }
    $('#cuerpo').append('<p id="paraSiguiente"></p>');
    $('#siguiente').on('click', generarPregunta)
    generarPregunta();
}
$(window).on('load', cargarPagina);