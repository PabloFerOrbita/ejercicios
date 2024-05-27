<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="aes" name="aes" /> <button>Contar aes</button>
    </form>
    <?php
    if (isset($_GET['aes'])) {
        echo numeroDeAes($_GET['aes']);
    }
    function numeroDeAes($palabra)
    {
        return count(explode('A', strtoupper($palabra))) - 1;
    }
    ?>
</body>

</html>