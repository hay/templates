<?php
    require 'class-vite.php';

    // This is just one way to distinguish between development and production
    // mode, this could also be an environment variable or something else
    define('IS_DEV', true);

    $vite = new Vite([
        "entryPath" => "js/main.js",
        "manifestPath" => "dist/manifest.json"
    ]);
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>

    <!-- Vite loaders -->
    <?php if (IS_DEV): ?>
        <!-- Dev mode -->
        <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/<?= $vite->entryPath; ?>"></script>
    <?php else: ?>
        <!-- Production mode -->
        <?php foreach ($vite->styles as $style): ?>
            <link rel="stylesheet" href="<?= $style; ?>" />
        <?php endforeach; ?>

        <?php foreach ($vite->scripts as $script): ?>
            <script type="module" src="<?= $script; ?>"></script>
        <?php endforeach; ?>
    <?php endif; ?>
</head>
<body>
    <main id="app"></main>
</body>
</html>