<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        X: <input type="text" name="num1" />
		Y: <input type="text" name="num2" />
        Z: <input type="text" name="num3" />
		<input type="submit" />
    </form>
    <?php if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) :
        $n = array(
       intval($_GET['num1']),
       intval($_GET['num2']),
       intval($_GET['num3']));
    $positive = true;

        foreach ($n as $value):
    if ($value < 0) :
        $positive = !$positive;
        endif;

        if ($value === 0):
            $positive = true;
        break;
        endif;
        endforeach;

        if ($positive){
            echo "positive";
        }
        else {
            echo "negative";
        }

        endif;


    ?>
</body>
</html>