<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        body{
            text-align: center;
        }
    </style>
</head>

<body>
    <?php
    $signo = '';
    echo  '<p>Hola <span style="font-weight:bold">' . $_GET['nombre'] . '</span></p>';
    echo '<p>Tu horoscopo es</p>';

    switch ($_GET['mes']) {
        case 1:
            $signo = ($_GET['dia'] > 19 ? 'acuario' : 'capricornio');
            break;
        case 2:
            $signo = ($_GET['dia'] > 18 ? 'piscis' : 'acuario');
            break;
        case 3:
            $signo = ($_GET['dia'] > 20 ? 'aries' : 'piscis');
            break;
        case 4:
            $signo =  ($_GET['dia'] > 19 ? 'tauro' : 'aries');
            break;
        case 5:
            $signo =  ($_GET['dia'] > 20 ? 'geminis' : 'tauro');
            break;
        case 6:
            $signo =  ($_GET['dia'] > 20 ? 'cancer' : 'geminis');
            break;
        case 7:
            $signo =  ($_GET['dia'] > 22 ? 'leo' : 'cancer');
            break;
        case 8:
            $signo =  ($_GET['dia'] > 22 ? 'virgo' : 'leo');
            break;
        case 9:
            $signo =  ($_GET['dia'] > 22 ? 'libra' : 'virgo');
            break;
        case 10:
            $signo =  ($_GET['dia'] > 22 ? 'escorpio' : 'libra');
            break;
        case 11:
            $signo =  ($_GET['dia'] > 21 ? 'sagitario' : 'escorpio');
            break;
        case 12:
            $signo =  ($_GET['dia'] > 21 ? 'capricornio' : 'sagitario');
            break;
    }
    echo '<img src="img/signo-' . $signo . '.gif"/><br>';
    echo '<span>' . ucfirst($signo) . '</span><br>';
    echo '<span>' . $_GET['dia'] . '/' . $_GET['mes'] . '</span><br>';
    echo '<a href="ejer03.html">Volver</a>';

    ?>
</body>

</html>