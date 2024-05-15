
function minusculasOMayusculas(cadena) {
    if (cadena == cadena.toUpperCase()) {
        return 'La cadena solo está formada por mayúsculas';
    }
    if (cadena == cadena.toLowerCase()) {
        return 'La cadena solo está formada por minúsculas';
    }

    return 'La cadena está formada por una mezcla de mayúsculas y minúsculas';
}

alert(minusculasOMayusculas('Mezcla de ambas'))