<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <?php
    $matriz = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    imprimirMatriz($matriz);
    function imprimirMatriz($matriz)
    {
        foreach ($matriz as $fila => $valor) {
            foreach ($matriz[$fila] as $columna) {
                echo $columna . ' ';
            }
            echo '</br>';
        }
    }

    ?>
</body>

</html>