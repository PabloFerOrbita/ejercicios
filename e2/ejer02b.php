<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        body {
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>HORÓSCOPO CHINO</h1>
    <?php
    echo '<p>Año de nacimiento: <span style="font-weight:bold">' . $_GET['anio'] . '</span></p>';
    echo '<p>Eres</p>';
    echo '<img src ="img/';
    switch (($_GET['anio'] - 4) % 12) {
        case 0:
            echo 'raton';
            break;
        case 1:
            echo 'buey';
            break;
        case 2:
            echo 'tigre';
            break;
        case 3:
            echo 'conejo';
            break;
        case 4:
            echo 'dragon';
            break;
        case 5:
            echo 'serpiente';
            break;
        case 6:
            echo 'caballo';
            break;
        case 7:
            echo 'cabra';
            break;
        case 8:
            echo 'mono';
            break;
        case 9:
            echo 'gallo';
            break;
        case 10:
            echo 'perro';
            break;
        case 11:
            echo 'cerdo';
            break;
    }
    echo '.png"/>';
    echo '<p><a href="ejer02.php">Volver</a></p>';
    ?>
</body>

</html>