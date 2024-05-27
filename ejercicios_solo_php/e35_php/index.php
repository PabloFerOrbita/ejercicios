<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="array" name="array" /> <button>Con S</button>
    </form>
    <?php
    if (isset($_GET['array'])) {
        echo implode(' ', terminanConS($_GET['array']));
    }
    function terminanConS($array)
    {
        $arraySes = [];
        foreach (explode(' ', $array) as $palabra) {
            if (strtoupper($palabra[strlen($palabra) - 1])  == 'S') {
                array_push($arraySes, $palabra);
            }
        }
        return $arraySes;
    }
    ?>
</body>

</html>