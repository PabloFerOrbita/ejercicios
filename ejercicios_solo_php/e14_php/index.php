<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="arreglo.js"></script>
    <title>Document</title>
</head>

<body>
    <form method='get'>
        <input type="text" id="array" name="array" /> <br>
        <button> Imprimir Array</button><br>
    </form>
    <?php
    if(isset($_GET['array'])){
        echo imprimirArray($_GET['array']);
    }
    function imprimirArray($array)
    {
        $array = explode(' ', $array);
        foreach ($array as $element) {
            echo "{$element}<br>";
        };
    }
    ?>
</body>

</html>