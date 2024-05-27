<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function palindromo($palabra) {
        if(strtoupper(str_replace(' ', '', implode('', array_reverse(str_split($palabra))))) == strtoupper(str_replace(' ', '', implode('', str_split($palabra))))){
            return 'La cadena es un palíndromo';
        }
    
        return 'La cadena no es un palíndromo';
    }
    
    echo palindromo("La ruta nos aporto otro paso natural")
    ?>
</body>
</html>