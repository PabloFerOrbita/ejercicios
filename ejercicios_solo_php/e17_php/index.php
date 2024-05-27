<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="Rango.js"></script>
</head>

<body>
    <form method="get">
        <input type="number" id="numero1" name="numero1" />
        <input type="number" id="numero2" name="numero2" />
        <button type="submit">Rango</button><br>
    </form>
    <?php
    if (isset($_GET['numero1']) && isset($_GET['numero2'])) {
        contarRango($_GET['numero1'], $_GET['numero2']);
    }
    function contarRango($numero1, $numero2)
    {
        for ($i = $numero1 + 1; $i < $numero2; $i++) {
            echo $i . ' ';
        }
    }
    ?>
</body>

</html>