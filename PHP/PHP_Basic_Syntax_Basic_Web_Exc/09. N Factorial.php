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
$factorialResult = 1;
if (isset($_GET['num'])) :
    $n = intval($_GET['num']);
    for ($i = 1; $i <= $n; $i++):
        $factorialResult *= $i;
    endfor;
    echo $factorialResult;
endif;
?>
</body>
</html>