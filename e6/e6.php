<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $piezas = ['Dama' => 9, 'Torre' => 5, 'Alfil' => 3, 'Caballo' => 2, 'Peon' => 1];
    $blancas = [];
    $negras = [];
    $maximoCaptura = ['Dama' => 1, 'Torre' => 2, 'Alfil' => 2, 'Caballo' => 2, 'Peon' => 8];
    echo '<p>Fichas capturadas</p>';
    while (array_sum($blancas) < 9 && array_sum($negras) < 9) {
        $numeroBlancas = array_count_values($blancas);
        $capturada = array_rand($piezas);
        $cuenta = $numeroBlancas[$piezas[$capturada]] ?? 0;
        while ($cuenta == $maximoCaptura[$capturada]) {
            $capturada = array_rand($piezas);
            $cuenta = $numeroBlancas[$piezas[$capturada]] ?? 0;
        }
        array_push($blancas, $piezas[$capturada]);
        echo '<p> ' . $capturada . ' blanco (' . $piezas[$capturada] . ' peones)</p>';
        if (array_sum($blancas) < 9) {
            $numeroNegras = array_count_values($negras);
            $capturada = array_rand($piezas);
            $cuenta = $numeroNegras[$piezas[$capturada]] ?? 0;
            while ($cuenta == $maximoCaptura[$capturada]) {
                $capturada = array_rand($piezas);
                $cuenta = $numeroNegras[$piezas[$capturada]] ?? 0;
            }
            array_push($negras, $piezas[$capturada]);
            echo '<p> ' . $capturada . ' negro (' . $piezas[$capturada] . ' peones)</p>';
        }
    }



    if (array_sum($blancas) >= 9) {
        echo '<p> las blancas se rinden, han perdido el equivalente a ' . array_sum($blancas) . ' peones';
    } else {
        echo '<p> las negras se rinden, han perdido el equivalente a ' . array_sum($negras) . ' peones';
    }

    ?>
</body>

</html>