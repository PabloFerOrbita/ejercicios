<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="get">
        <label for="peso">Peso: </label>
        <input type="number" id="peso" name="peso" /><br>
        <label for="altura">Altura: </label>
        <input type="number" id="altura" name="altura" step="any"><br>
        <button type="submit">Calcular IMC</button>
    </form>
    <?php
    if (isset($_GET['peso']) && isset($_GET['altura'])) {
        echo calcularIMC($_GET['peso'], $_GET['altura']);
    }
    function calcularIMC($peso, $altura)
    {
        $imc = $peso / (pow($altura, 2));

        if ($imc <= 18.5) {
            return 'Bajo de peso';
        }
        if ($imc <= 24.9) {
            return 'Normal';
        }
        if ($imc <= 25.9) {
            return 'Sobrepeso';
        }
        if ($imc >= 30) {
            return 'Obesidad';
        }
    }
    ?>
</body>

</html>