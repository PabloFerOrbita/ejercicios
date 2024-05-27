<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="array" name="array" /><button>Duplicar</button>
    </form>
    <?php
    if(isset($_GET['array'])){
        echo implode(' ',duplicar($_GET['array']));
    }
    function duplicar($array)
    {
        $arrayDoble = [];
        foreach (explode(' ', $array) as $numero) {
            array_push($arrayDoble, $numero * 2);
        }

        return $arrayDoble;
    }
    ?>
</body>

</html>