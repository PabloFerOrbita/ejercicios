var valores_provisionales = ['patata', 'cebo', 'peine', 'ceja', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra', 'palabra'];
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
        $(opcion).on('click', (e) => { mostrarPalabra($(e.target.firstChild).text()) });
        $(opcion).append(`<td>${valor.valor}</td><td class="text-end text-secondary fw-light">${valor.id}</td>`);
        $('#resultados').append(opcion);

    })
}
function autocompletar(busqueda) {
    var resultados = 0;
    $('.opcion').each((index, valor) => {
        if (!$(valor.firstChild).text().toUpperCase().includes(busqueda.toUpperCase())) {
            $(valor).addClass('d-none');

        } else {
            $(valor).removeClass('d-none');
            resultados++;
        }

    })
    if (busqueda == '') {
        esconderTabla('')
    } else {

        $('#cantidad').html(resultados > 0 ? `Se han encontrado <strong>${resultados}</strong> resultados` : `Se han encontrado <strong>0</strong> resultados para <strong>"${busqueda}"</strong>`)
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

function mostrarPalabra(palabra) {
    $('#busqueda').val(palabra)
    $('#encontrado').text(palabra)
    esconderTabla('')
}

$(window).on('load', cargarPagina);