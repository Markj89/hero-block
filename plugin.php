<?php
/**
 * Plugin Name: hero-block — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/Markj89/hero-block
 * Description: hero-block — is a Gutenberg plugin created via create-guten-block.
 * Author: Marcus Jackson
 * Author URI: https://mjackson89.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
