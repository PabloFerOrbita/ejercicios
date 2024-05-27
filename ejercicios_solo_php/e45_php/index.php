<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<?php
$numero1 = 0;
$numero2 = 0;

if ($numero1 <= $numero2) {
    echo "$numero1 no es mayor que $numero2<br>";
}
if ($numero2 >= 0) {
    echo "$numero2 es positivo<br>";
}
if ($numero1 != 0) {
    echo "$numero1 es negativo o distinto de cero<br>";
}
if (($numero1 + 1) < $numero2) {
    echo "Incrementar en 1 unidad el valor de $numero1 no lo hace mayor o igual que $numero2<br>";
}
?>
</body>

</html>