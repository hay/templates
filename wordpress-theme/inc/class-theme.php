<?php
namespace MyThemeName;

class Theme {
    function __construct() {
        $this->removeEmojiSupport();
    }

    private function removeEmojiSupport() {
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('wp_print_styles', 'print_emoji_styles' );
    }

    public function getHome() {
        return get_bloginfo('url');
    }

    public function getTheme() {
        return get_bloginfo('template_directory');
    }
}