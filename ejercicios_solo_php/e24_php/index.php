<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="get">
        <label for="array">Array:</label><input type="text" id="array" name="array" /> <br>
        <label for="posicion1">Posicion 1:</label> <input type="text" id="posicion1" name="posicion1"><br>
        <label for="posicion2">Posicion 2:</label><input type="text" id="posicion2" name="posicion2"><br>
        <button>Sumar</button><br>
    </form>
    <?php
    if (isset($_GET['array']) && isset($_GET['posicion1']) && isset($_GET['posicion2'])) {
        echo sumarArreglo($_GET['array'], $_GET['posicion1'], $_GET['posicion2']);
    }
    function sumarArreglo($array, $posicion1, $posicion2)
    {
        $suma = 0;
        $array = explode(' ', $array);
        for ($i = $posicion1 + 1; $i < $posicion2; $i++) {
            $suma += intval($array[$i]);
        }
        return $suma;
    }
    ?>
</body>

</html>