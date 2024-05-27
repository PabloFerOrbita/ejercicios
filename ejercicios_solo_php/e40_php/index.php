<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $matriz = [[1, 2, 3, '*'], ['*', '*', '*', 'estado'], ['a', 'a', 'a', 'a'], ['*', 3, 4, '*', '*']];

    echo numAstericos($matriz);
    function numAstericos($matriz)
    {
        $asteriscos = 0;
        foreach ($matriz as $fila => $valor) {
            foreach ($matriz[$fila] as $columna) {
                if ($columna == '*') {
                    $asteriscos++;
                }
            }
        }
        return $asteriscos;
    }
    ?>
</body>

</html>