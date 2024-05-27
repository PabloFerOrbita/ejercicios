<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $array = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'palabra'];
    echo implode(' ', palabrasANumeros($array));
    function palabrasANumeros($array)
    {
        $arrayNumeros = [];
        foreach ($array as $palabra) {
            switch (strtoupper($palabra)) {
                case 'CERO':
                    array_push($arrayNumeros, 0);
                    break;
                case 'UNO':
                    array_push($arrayNumeros, 1);
                    break;
                case 'DOS':
                    array_push($arrayNumeros, 2);
                    break;
                case 'TRES':
                    array_push($arrayNumeros, 3);
                    break;
                case 'CUATRO':
                    array_push($arrayNumeros, 4);
                    break;
                case 'CINCO':
                    array_push($arrayNumeros, 5);
                    break;
                case 'SEIS':
                    array_push($arrayNumeros, 6);
                    break;
                case 'SIETE':
                    array_push($arrayNumeros, 7);
                    break;
                case 'OCHO':
                    array_push($arrayNumeros, 8);
                    break;
                case 'NUEVE':
                    array_push($arrayNumeros, 9);
                    break;
                default:
                    array_push($arrayNumeros, (-1));
            }
        }
        return $arrayNumeros;
    }
    ?>

</body>

</html>