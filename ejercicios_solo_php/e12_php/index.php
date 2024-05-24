<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="calcularImpuestos.js"></script>
</head>

<body>
    <form method="get">
        <label for="edad">Edad: </label>
        <input type="number" id="edad" name="edad" /><br>
        <label for="ingresos">Ingresos: </label>
        <input type="number" id="ingresos" name="ingresos"><br>
        <button type="submit">Calcular</button>
    </form>
    <?php
    if(isset($_GET['edad']) && isset($_GET['ingresos'])){
       echo calcularImpuestos($_GET['edad'], $_GET['ingresos']);
    }
    function calcularImpuestos($edad, $ingresos ){
        if ($edad >= 18 && $ingresos >= 1000) {
            return $ingresos * (40 / 100);
        }
        return 0;
    }
    ?>
</body>

</html>