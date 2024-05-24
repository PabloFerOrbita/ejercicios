<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="validarContrasena.js"></script>
</head>
<body>
    <form>
        <input type="text" id="contrasena" name="contrasena" /><br>
        <button type="submit">Boton</button>
    </form>
</body>
<?php
if(isset($_GET['contrasena'])){
    if ($_GET['contrasena'] === '2Fj(jjbFsuj' || $_GET['contrasena'] === 'eoZiugBf&g9') {
        echo 'true';
        return true;

    }
    echo 'false';
    return false;

}
?>
</html>