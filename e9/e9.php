<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
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

        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        button {
            width: 20%;

        }
    </style>
</head>

<body>
    <form method="get" action="">
        <div>
            <label for="fecha">Fecha: </label>
            <input type="text" id="fecha" name="fecha" /><br>
        </div>
        <button type="submit">Comprobar</button>
    </form>
    <?php
    if (isset($_GET['fecha'])) {
        if (str_contains($_GET['fecha'], '/')) {
            $fecha = str_replace('/', '-', $_GET['fecha']);
        } else {
            $fecha = $_GET['fecha'];
        }
        if ((bool)strtotime($fecha)) {
            echo '<h3>La fecha es válida</h3>'; 
        } else {
            echo '<h3>La fecha no es válida</h3>';
        }
    }
    ?>
</body>

</html>