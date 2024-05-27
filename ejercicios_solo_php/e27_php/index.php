<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" name="minusculas" id="minusculas" /> <button>Mayúscula</button>
    </form>
    <?php
    if (isset($_GET['minusculas'])) {
        echo capitalizar($_GET['minusculas']);
    }
    function capitalizar($frase)
    {
        $arrayFrase = [];
        foreach (explode(' ', $frase) as $palabra) {
            array_push($arrayFrase, ucfirst($palabra));
        }
        return implode(' ', $arrayFrase);
    }
    ?>
</body>

</html>