<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="NumeroCaracteres.js"></script>
</head>

<body>
    <form action="" method="get">
        <label for='caracter'>Caracter: </label><input type="text" id="caracter" name="caracter" maxlength="1" /> <label for="palabra">Palabra: </label> <input type="text" id="palabra" name="palabra" /> <button>Contar caracter</button>
    </form>
    <?php
    if (isset($_GET['caracter']) && isset($_GET['palabra'])) {
        echo numeroDeCaracteres($_GET['caracter'], $_GET['palabra']);
    }
    function numeroDeCaracteres($caracter, $palabra)
    {
        return count(explode(strtoupper($caracter), strtoupper($palabra))) - 1;
    }
    ?>
</body>

</html>