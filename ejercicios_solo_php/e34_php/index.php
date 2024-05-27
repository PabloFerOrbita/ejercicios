<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="conA" name="conA" /><button>Con A</button>
    </form>
    <?php
    if (isset($_GET['conA'])) {
        echo implode(' ', empiezanConA($_GET['conA']));
    }
    function empiezanConA($array)
    {
        $arrayAes = [];
        foreach (explode(' ', $array) as $palabra) {
            if (strtoupper($palabra[0]) == 'A' || strtoupper($palabra[0]) == 'Á') {
                array_push($arrayAes, $palabra);
            }
        }
        return $arrayAes;
    }
    ?>
</body>

</html>