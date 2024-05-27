<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    function minusculasOMayusculas($cadena)
    {
        if ($cadena == strtoupper($cadena)) {
            return "La cadena solo está formada por mayúsculas";
        }
        if ($cadena == strtolower($cadena)) {
            return "La cadena solo está formada por minúsculas";
        }

        return "La cadena está formada por una mezcla de mayúsculas y minúsculas";
    }

    echo minusculasOMayusculas("Mezcla de ambas");
    ?>
</body>

</html>