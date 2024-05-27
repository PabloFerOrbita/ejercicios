<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $valores = [true, 5, false, "hola", "adios", 2];

    if (strlen($valores[3]) > strlen($valores[4])) {
        echo '"' . $valores[3] . '"' .  "es mayor que " . '"' . $valores[4] . '"<br>';
    } else if (strlen($valores[4]) > strlen($valores[3])) {
        echo '"' . $valores[4] . '"' . "es mayor que " . '"' . $valores[3] . '"<br>';
    } else {
        echo '"' . $valores[3] . '"' . " y " .  '"' . $valores[4] . '"' . " son iguales<br>";
    }


    echo var_export($valores[0], true) . " != " . var_export($valores[2], true) . " debería ser true: " . var_export($valores[0] != $valores[2], true) . "<br>";
    echo var_export($valores[0], true) . " == " .  var_export($valores[2], true) . " debería ser false: " . var_export($valores[0] == $valores[2], true) . "<br>";
    echo var_export($valores[0], true) . " > " . var_export($valores[2], true) .  " debería ser true: " . var_export($valores[0] > $valores[2], true) . "<br>";
    echo var_export($valores[0], true) . " < " . var_export($valores[2], true) . " debería ser false: " . var_export($valores[0] < $valores[2], true) . "<br>";
    echo $valores[1] . " + " .  $valores[5] . " = " . ($valores[1] + $valores[5]) . "<br>";
    echo $valores[1] . " - " . $valores[5] . " = " . ($valores[1] - $valores[5]) . "<br>";
    echo $valores[1] . " * " . $valores[5] . " = "  . ($valores[1] * $valores[5]) . "<br>";
    echo $valores[1] .  " / " .  $valores[5] . " = " . ($valores[1] / $valores[5]) . "<br>";
    echo $valores[1] .  " % " .  $valores[5] . " = " . ($valores[1] % $valores[5]) . "<br>";
    ?>
</body>

</html>