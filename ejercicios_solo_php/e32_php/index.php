<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="array" name="array" /><button>Pares</button>
    </form>
    <?php
    if (isset($_GET['array'])) {
        echo implode(' ', posicionPares($_GET['array']));
    }
    function posicionPares($array)
    {
        $arrayPares = [];
        foreach (explode(' ', $array) as $posicion => $numero) {
            if ($numero % 2 == 0) {
                array_push($arrayPares, $posicion);
            }
        }

        return $arrayPares;
    }
    ?>
</body>

</html>