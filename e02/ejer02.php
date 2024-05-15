<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type='text/css'>
        table,
        th {
            border: solid black 1px;
            border-collapse: collapse;
            padding: 5px;
        }


        td {
            border-right: solid black 1px;
            padding: 5px;
        }
        body{
            display: flex;
            justify-content: center;
        }
    </style>
</head>

<body>
    <?php
    $anio = 1960;
    echo '<table>';
    echo '<thead><th colspan=10><p>HOROSCOPO CHINO</p><p>Selecciona tu año de nacimiento</p></th></thead>';
    echo '<tbody>';
    for ($i = 0; $i < 7; $i++) {
        echo '<tr>';
        for ($j = 0; $j < 10; $j++) {
            echo '<td><a href="ejer02b.php?anio=' . $anio . '">' . $anio . '</a></td>';
            $anio++;
        }
        echo '</tr>';
    }
    echo '</tbody>';
    echo '</table>';


    ?>
</body>

</html>