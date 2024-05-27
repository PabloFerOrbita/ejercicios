<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" name="numeros" id="numeros" /><button>Maximo</button>
    </form>
    <?php
    if (isset($_GET['numeros'])) {
        echo maximoNumero($_GET['numeros']);
    }
    function maximoNumero($array)
    {
        $array = explode(' ', $array);
        $maximo = 0;
        foreach ($array as $numero) {
            if (intval($numero) > $maximo) {
                $maximo = $numero;
            }
        }

        return $maximo;
    }
    ?>
</body>

</html>