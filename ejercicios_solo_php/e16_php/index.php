<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="get">
        <input type="number" id="numero" name="numero"><button>FizzBuzz</button>
    </form>
    <?php
    if(isset($_GET['numero'])){
        echo fizzBuzz($_GET['numero']);
    }
    function fizzBuzz($numero)
    {
        if ($numero % 3 == 0 && $numero % 5 == 0) {
            return 'fizzbuzz';
        }
        if ($numero % 3 == 0) {
            return 'fizz';
        }
        if ($numero % 5 == 0) {
            return 'buzz';
        }

        return $numero;
    }
    ?>
</body>

</html>