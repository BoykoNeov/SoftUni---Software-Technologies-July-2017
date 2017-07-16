    <ul>
<?php }
for($i = 1; $i<=20; $i++) :
    if ($i % 2 === 0): ?>
        <li> <span style="color: green;"> <?= $i ?></span></li>
        <?php else: ?>
        <li> <span style="color: blue;"> <?= $i ?></span></li>
    <?php endif; endfor; ?>
</ul>