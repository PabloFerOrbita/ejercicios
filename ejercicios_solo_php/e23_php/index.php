<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="array" name="array" /> <br>
        <button>Quitar ceros</button><br>
    </form>
    <?php
    if (isset($_GET['array'])) {
        echo implode(' ',removerCeros($_GET['array']));
    }
    function removerCeros($array)
    {
        $array = str_split(implode('', explode('0', implode('', explode(' ', $array)))));
        return $array;
    }
    ?>
</body>

</html>