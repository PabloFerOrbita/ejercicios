<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $factorial = 4;
    for($i = $factorial - 1; $i > 0; $i-- ){
        $factorial *=  $i;
    }
    
    echo $factorial;
    ?>
</body>
</html>