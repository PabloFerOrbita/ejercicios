<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    echo implode(' ', numeroAPalabras($array));
    function numeroAPalabras($array)
    {
        $arrayPalabras = [];
        foreach ($array as $numero) {
            switch ($numero) {
                case 1:
                    array_push($arrayPalabras, 'uno');
                    break;
                case 2:
                    array_push($arrayPalabras, 'dos');
                    break;
                case 3:
                    array_push($arrayPalabras, 'tres');
                    break;
                case 4:
                    array_push($arrayPalabras, 'cuatro');
                    break;
                case 5:
                    array_push($arrayPalabras, 'cinco');
                    break;
                case 6:
                    array_push($arrayPalabras, 'seis');
                    break;
                case 7:
                    array_push($arrayPalabras, 'siete');
                    break;
                case 8:
                    array_push($arrayPalabras, 'ocho');
                    break;
                case 9:
                    array_push($arrayPalabras, 'nueve');
                    break;
                default:
                    array_push($arrayPalabras, 'cero');
            }
        }
        return $arrayPalabras;
    }
    ?>
</body>

</html>