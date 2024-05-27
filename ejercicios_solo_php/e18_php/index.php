<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="number" id="numero1" name="numero1" />
        <input type="number" id="numero2" name="numero2" />
        <button>Sumar Rango</button><br>
    </form>
    <?php
    if (isset($_GET['numero1']) && isset($_GET['numero2'])) {
        echo sumarRango($_GET['numero1'], $_GET['numero2']);
    }
    function sumarRango($numero1, $numero2)
    {
        $suma = 0;
        for ($i = $numero1; $i <= $numero2; $i++) {
            $suma += $i;
        }
        return $suma;
    }

    ?>
</body>

</html>