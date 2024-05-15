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

        table {
            margin: 2em;
        }


        td {
            border-right: solid black 1px;
            padding: 5px;
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: start;
            width: 20%;
            gap: 2em;
            margin-top: 2em;
            border: solid black 1px;
            padding: 2em;
        }

        #numero,
        #cantidad,
        #generar {
            width: 20%;

        }

        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <form method="GET" action="">
        <div>
            <label for="numero">Numero: </label>
            <input name="numero" id="numero" type='number' step="any" required />
        </div>
        <div>
            <label for="cantidad">Cantidad de registros: </label>
            <input name="cantidad" id="cantidad" type="number" required min='1' />
        </div>
        <button type="submit" name="generar" id="generar">Generar</button>
    </form>
    <?php
    if (isset($_GET['numero']) && is_numeric($_GET['numero']) && isset($_GET['cantidad']) && $_GET['cantidad'] > 0 && is_numeric($_GET['cantidad'])) {
        echo '<table border="1">';
        echo '<thead>';
        echo '<tr>';
        echo '<th>Multiplicacion</th>';
        echo '<th>Resultado</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody>';
        for ($i = 1; $i <= $_GET['cantidad']; $i++) {
            echo '<tr>';
            echo '<td>' . $_GET['numero'] . ' x ' . $i . '</td>';
            echo '<td>' . ($_GET['numero'] * $i) . '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        echo '</table>';
    }
    ?>
</body>

</html>