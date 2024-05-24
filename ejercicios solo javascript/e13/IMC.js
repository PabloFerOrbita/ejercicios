function cargarPagina() {
    document.querySelector('button').addEventListener('click', () => {
        alert(calcularIMC(document.querySelector('#peso').value, document.querySelector('#altura').value))
    })
}

function calcularIMC(peso, altura){
    var imc = peso / (Math.pow(altura, 2));
    
    if (imc <= 18.5){
        return 'Bajo de peso'
    }
    if (imc <= 24.9) {
        return 'Normal'
    }
    if (imc <= 25.9) {
        return 'Sobrepeso'
    }
    if (imc >= 30 ){
        return 'Obesidad'
    }
}

window.addEventListener('load', cargarPagina);