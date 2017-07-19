<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
    <?php
    function FibonacciStep ($firstNumber, $secondNumber, $limit, $numberCount){
        $nextNumber = $firstNumber + $secondNumber;
        if ($numberCount < $limit-2):
            echo $nextNumber.' ';
            FibonacciStep($secondNumber, $nextNumber, $limit, $numberCount + 1);
        endif;
    }

    if (isset($_GET['num'])):
    $limit = intval($_GET['num']);
    echo "1"." "."1"." ";
    FibonacciStep(1, 1, $limit, 0);
    endif;
    ?>
</body>
</html>