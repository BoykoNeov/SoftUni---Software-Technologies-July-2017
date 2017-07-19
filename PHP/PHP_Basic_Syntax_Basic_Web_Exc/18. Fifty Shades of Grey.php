<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        div {
            display: inline-block;
            margin: 5px;
            width: 20px;
            height: 20px;
        }
    </style> 
</head>
<body>
<?php
for ($backgColor =0 ; $backgColor <= 255; $backgColor++) :
    for ($columnsCounter = 1; $columnsCounter <= 10; $columnsCounter++) : ?>
        <div style="background-color: rgb(<?=$backgColor?>, <?=$backgColor?>, <?=$backgColor?>);"></div>
        <?php $backgColor += 5;
        endfor;
        echo "<br/>";
endfor;
?>
</body>
</html>