<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    $numero = 23;
    $letra = 'T';
    
    if ($numero < 0 || $numero > 99999999) {
        echo 'El número no es válido';
    } else {
        $letraAsignada = $letras[$numero % 23];
        if ($letraAsignada != $letra){
            echo 'la letra indicada no es la correcta';
        } else {
            echo 'el número y la letra del dni son correctos';
        }
    }
    
    ?>
</body>
</html>