<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $factorial = $_GET['numero'];
    for ($i = ($factorial - 1); $i > 0; $i--) {
        $factorial = $factorial * $i;
    }

    echo '<p>El factorial de ' . $_GET['numero'] . ' es ' . $factorial . '</p>';
    echo '<a href="ejer04.html">Volver</a>';

    ?>
</body>

</html>