function palindromo(palabra) {
    if(palabra.split('').reverse().join('').replaceAll(' ', '').toUpperCase() == palabra.split('').join('').replaceAll(' ', '').toUpperCase()){
        return 'La palabra es un palíndromo';
    }

    return 'La palabra no es un palíndromo';
}

alert(palindromo("La ruta nos aporto otro paso natural"))