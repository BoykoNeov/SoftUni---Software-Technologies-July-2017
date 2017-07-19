<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>
    <form>
        N: <input type="text" name="num1" />
        M: <input type="text" name="num2" />
        <input type="submit" />
    </form>
    <ul>
        <?php if (isset($_GET['num1']) && isset($_GET['num2'])) :
            $n1 = intval($_GET['num1']);
            $n2 = intval($_GET['num2']); ?>
            <?php for ($i = 1; $i <= $n1; $i++): ?>
            <li>List <?= $i;?>
                <ul>
                <?php for ($j = 1; $j <= $n2; $j++): ?>
                    <li>Element <?= $i ?>.<?= $j?></li>
                <?php endfor; ?>
                </ul>
            </li>
            <?php endfor; ?>
    </ul>
<?php endif; ?>
</body>
</html>