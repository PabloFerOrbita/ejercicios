<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" name="cadena" id="cadena"><button>Contrasena</button>
    </form>
    <?php
    if (isset($_GET['cadena'])) {
        echo password($_GET['cadena']);
    }
    function password($palabra)
    {
        return str_replace('o', 0, str_replace('i', 1, str_replace('e', 3, str_replace('a', 4, strtolower($palabra)))));
    }
    ?>
</body>

</html>