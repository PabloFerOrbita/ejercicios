<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $dado1 = 0;
    $dado2 = 0;
    $resultados = [];

    for ($i = 0; $i < 36000; $i++) {
        $dado1 = rand(1, 6);
        $dado2 = rand(1, 6);
        array_push($resultados, $dado1 + $dado2);
    }

    echo implode(' ', $resultados);
    ?>
</body>

</html>