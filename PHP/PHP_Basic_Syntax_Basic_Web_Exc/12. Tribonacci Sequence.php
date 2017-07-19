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
    if (isset($_GET['num'])):
        $limit = intval($_GET['num']);
        $sequence = array(0, 1, 1);
        echo '1'.' '.'1'.' ';

        for ($i = 3; $i <= $limit; $i++ ):
        $sequence[$i] = $sequence[$i-1] + $sequence[$i - 2] + $sequence[$i - 3];
        echo $sequence[$i].' ';
        endfor;
    endif;
    ?>
</body>
</html>