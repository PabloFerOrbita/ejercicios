<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="likes.js"></script>
</head>

<body>
    <form method="get">
        <input type="number" id="likes">
        <button>Calcular</button>
    </form>
    <?php
     function numeroLikes($likes) {
        if ($likes->length <= 3) {
            return $likes;
        }
        $digitos = $likes->length - ($likes->length <= 6 ? 3 : 6);
        $likes = explode('',$likes);
        return implode('', $likes) . ($likes <= 6 ? 'K' : 'M');
    
    }
    
    ?>
</body>

</html>