<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>
<?php
$color = "grey";
$buttonText = "1";

for ($i = 0; $i<=8; $i++):
    for ($j = 0; $j <= 4; $j++):
     if ($i === 0 || $i === 4 || $i === 8 || ($i < 4 && $j === 0) || ($i> 4 && $j === 4)) :
        echo "<button style='background-color: blue'>1</button>";
else:
echo "<button>0</button>";
endif;
    endfor;
    ?><br/>
<?php endfor;
?>
</body>
</html>