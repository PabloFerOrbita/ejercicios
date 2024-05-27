<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function parOImpar($numero) {
        if($numero % 2 == 0){
            return 'par';
        }
        return 'impar';
    }
    
    echo parOImpar(4);
    ?>
</body>
</html>