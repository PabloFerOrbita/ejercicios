
var valores = [];
var cantidad_valores = 10;


function cargarPagina() {
    $('#busqueda').on('input', (e) => autocompletar(e.target.value));
    $('#busqueda').on('focus', (e) => autocompletar(e.target.value));
    $('#cuerpo').on('click', (e) => { esconderTabla(e.target.id) });
    generarValores();
    rellenarTabla();
}
function generarValores() {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 1; i <= cantidad_valores; i++) {
        let valor = '';
        for (let j = 0; j < Math.floor(Math.random() * caracteres.length); j++) {
            valor += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        valores.push({ id: i, valor: valor });
    }
}
function rellenarTabla() {
    valores.forEach(valor => {

        let opcion = $('<tr class="p-1 opcion">');
        $(opcion).on('click', (e) => { mostrarPalabra($(e.currentTarget.firstChild).text()) });
        $(opcion).append(`<td>${valor.valor}</td><td class="text-end text-secondary fw-light">${valor.id}</td>`);
        $('#resultados').append(opcion);

    })
}
function autocompletar(busqueda) {
    var resultados = 0;
    var caracteres = busqueda.split('');
    $('.opcion').each((index, valor) => {
        $(valor.firstChild).html((index, palabra) => (palabra.replace(new RegExp('<(.*?)>', 'g'), '')));
        if ($('#modo').is(':checked')) {
            if (!$(valor.firstChild).text().toUpperCase().includes(busqueda.toUpperCase())) {
                $(valor).addClass('d-none');

            } else if (busqueda != '') {
                $(valor).removeClass('d-none');
                $(valor.firstChild).html((index, palabra) => {
                    let ultimoIndex = palabra.toUpperCase().indexOf(busqueda.toUpperCase());
                    return colorearTexto(palabra, caracteres, ultimoIndex, true);
                });
                resultados++;
            }
        } else {

            let ultimoIndex = 0;
            let coincidencias = 0;
            caracteres.forEach(caracter => {
                if ($(valor.firstChild).text().toUpperCase().includes(caracter.toUpperCase(), ultimoIndex)) {
                    coincidencias++;
                    ultimoIndex = $(valor.firstChild).text().toUpperCase().indexOf(caracter.toUpperCase(), ultimoIndex);

                }
            })
            if (coincidencias != caracteres.length) {
                $(valor).addClass('d-none');
            } else {
                $(valor).removeClass('d-none');
                resultados++;
                ultimoIndex = 0;
                $(valor.firstChild).html((index, palabra) => {
                    return colorearTexto(palabra, caracteres, ultimoIndex, false);

                });
            }
        }

    })

    if (busqueda == '') {
        esconderTabla('')
    } else {

        $('#cantidad').html(resultados > 0 ? `Se ${resultados > 1 ? 'han' : 'ha'} encontrado <span class="fw-bold">${resultados}</span> ${resultados > 1 ? 'resultados' : 'resultado'}` : `Se han encontrado <span class="fw-bold">0</span> resultados para <span class="fw-bold">"${busqueda}"</span>`)
        mostrarTabla();
    }


}

function esconderTabla(id) {

    if (id != 'busqueda') {
        $('#autocompletar').addClass('d-none')
    }
}

function mostrarTabla() {
    $('#autocompletar').removeClass('d-none');
}

function colorearTexto(palabra, caracteres, ultimoIndex, estricto) {
    palabra = palabra.split('');
    caracteres.forEach(caracter => {
        if (estricto) {
            var reemplazo = palabra.findIndex((elemento, index) => elemento.toUpperCase() == caracter.toUpperCase() && (index == ultimoIndex || index == ultimoIndex + 1))
        } else {
            var reemplazo = palabra.findIndex((elemento, index) => elemento.toUpperCase() == caracter.toUpperCase() && index >= ultimoIndex)
        }
        palabra[reemplazo] = `<span class="text-danger">${palabra[reemplazo]}</span>`;
        ultimoIndex = reemplazo;
    })

    return palabra.join('');
}

function mostrarPalabra(palabra) {
    $('#busqueda').val(palabra)
    $('#encontrado').text(palabra)
    esconderTabla('')
}



$(window).on('load', cargarPagina);