<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="get">
        <input type="text" id="minuscula" name="minuscula" /> <button>Mayúscula</button>
    </form>
    <?php
    if(isset($_GET['minuscula'])){
        echo capitalizar($_GET['minuscula']);
    }
    function capitalizar($palabra) {
        return ucfirst($palabra);
    
    }
    ?>
</body>

</html>