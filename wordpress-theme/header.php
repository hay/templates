<?php global $T; ?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>
        <?php the_title(); ?> &raquo; <?php bloginfo('name'); ?>
    </title>

    <meta id="context" content="<?= $T->getHome(); ?>" />

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?>" href="/feed" />

    <link rel="stylesheet" href="<?= $T->getTheme(); ?>/css/style.css" />

    <?php wp_head(); ?>
</head>
<body>