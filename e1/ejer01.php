<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        table, tr, th, td{
            border: solid black 1px;
            text-align: center;
            margin-bottom: 1em;
        }
        tr, th, td{
            padding-left: 1em;
            padding-right: 1em;
        }
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    </style>
</head>

<body>
    <table>
        <?php
        echo '<thead>';
        echo '<tr><th colspan="2">TABLA DEL ' . $_GET['num'] . '</th></tr>';
        echo '</thead>';
        echo '<tbody>';
        for ($i = 1; $i <= 10; $i++) {
            echo '<tr>';
            echo '<td>' . $_GET['num'] . ' x ' . $i . '</td><td>' . ($_GET['num'] * $i) . '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        ?>
    </table>
    <a href="ejer01.html">Volver</a>
</body>

</html>