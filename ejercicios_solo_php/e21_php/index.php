<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="SumaArreglo.js"></script>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="array" name="array" /> <br>
        <button> Sumar Array</button><br>
    </form>
    <?php
    if (isset($_GET['array'])) {
        echo sumarArreglo($_GET['array']);
    }
    function sumarArreglo($array)
    {
        $suma = 0;
        $array = explode(' ', $array);
        foreach ($array as $numero) {
            $suma += intval($numero);
        }
        return $suma;
    }
    ?>
</body>

</html>