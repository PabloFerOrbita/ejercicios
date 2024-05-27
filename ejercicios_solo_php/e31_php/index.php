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
        echo implode(' ', pares($_GET['array']));
    }
    function pares($array)
    {
        $arrayPares = [];
        foreach (explode(' ', $array) as $numero) {
            if ($numero % 2 == 0) {
                array_push($arrayPares, $numero);
            }
        }

        return $arrayPares;
    }
    ?>
</body>

</html>