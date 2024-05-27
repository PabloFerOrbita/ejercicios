<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="MultiplicarArreglo.js"></script>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="array" name="array" /> <br>
        <button>Multiplicar Array</button><br>
    </form>
    <?php
    if (isset($_GET['array'])) {
        echo multiplicarArreglo($_GET['array']);
    }
    function multiplicarArreglo($array)
    {
        $producto = 1;
        $array = explode(' ', $array);
        foreach ($array as $numero) {
            $producto *= intval($numero);
        }
        return $producto;
    }
    ?>
</body>

</html>