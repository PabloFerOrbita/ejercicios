<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="adn" name="adn" /> <button>ARN</button>
    </form>
    <?php
    if (isset($_GET['adn'])) {
        echo transcribir($_GET['adn']);
    }
    function transcribir($adn)
    {
        $arn = str_replace('T', 'A', str_replace('A', 'U', str_replace('Y', 'C', str_replace('C', 'G', str_replace('G', 'Y', strtoupper($adn))))));
        return $arn;
    }
    ?>
</body>

</html>