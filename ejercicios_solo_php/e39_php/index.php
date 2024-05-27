<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $array = [1, 'palabra', '*', 3, '*', '*', '*'];
    echo numAstericos($array);
    function numAstericos($array)
    {
        $asteriscos = 0;
        foreach ($array as $elemento) {
            if ($elemento == '*') {
                $asteriscos++;
            }
        }
        return $asteriscos;
    }
    ?>
</body>

</html>