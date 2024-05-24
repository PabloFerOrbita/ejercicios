
function cargarPagina() {
    $('.contenedorBoton').on('mouseenter', mover);
}
var posicionActual = 'centro';


function mover() {
    $(`#${posicionActual}`).empty();
    switch (posicionActual) {
        case 'arribaIzquierda':
            $('<button class="btn btn-danger">NO</button>').appendTo('#abajoDerecha');
            posicionActual = 'abajoDerecha';
            break;
        case 'centro':
            $('<button class="btn btn-danger">NO</button>').appendTo('#arribaIzquierda');
            posicionActual = 'arribaIzquierda';
            break;
        case 'abajoDerecha':
            $('<button class="btn btn-danger">NO</button>').appendTo('#abajoIzquierda');
            posicionActual = 'abajoIzquierda';
            break;
        case 'abajoIzquierda':
            $('<button class="btn btn-danger">NO</button>').appendTo('#arribaDerecha');
            posicionActual = 'arribaDerecha';
            break;
        default:
            $('<button class="btn btn-danger">NO</button>').appendTo('#centro');
            posicionActual = 'centro';
    }


}

$(window).on('load', cargarPagina);