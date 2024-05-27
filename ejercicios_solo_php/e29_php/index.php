<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="numeros" name="numeros" /><button>Minimo</button>
    </form>
    <?php
    if (isset($_GET['numeros'])) {
        echo minimoNumero($_GET['numeros']);
    }
    function minimoNumero($array)
    {
        $array = explode(' ', $array);
        $minimo = $array[0];
        foreach ($array as $numero) {
            if (intval($numero) < $minimo) {
                $minimo = $numero;
            }
        }

        return $minimo;
    }
    ?>
</body>

</html>