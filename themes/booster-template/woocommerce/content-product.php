<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<li <?php wc_product_class( 'list booster', $product ); ?>>
    <div class="container-fluid">
	<?php
	/**
	 * Hook: woocommerce_before_shop_loop_item.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 */
    do_action( 'woocommerce_before_shop_loop_item' );
	?>
        <div class="col-xs-12 col-sm-12 no-padding-left product-name">
    <?php
    /**
     * Hook: woocommerce_shop_loop_item_title.
     *
     * @hooked woocommerce_template_loop_product_link_open - 5
     * @hooked woocommerce_template_loop_product_title - 10
     * @hooked woocommerce_template_loop_product_link_close - 15
     */
    do_action( 'woocommerce_shop_loop_item_title' );
    ?>
        </div>
        <div class="double-wrapper"> <div class="coverages-frequencies"> 300 Sqm / 1800 MHz </div></div>
        <div class="double-wrapper" style="display: none !important;"> <div class="col-xs-12 col-sm-6 coverages"> <i class="mb-icon-building-1" title="300sqm – Ideal for small office, studios, and small homes - Max 6 users"></i><div class="name">300 Sqm</div> </div> <div class="col-xs-12 col-sm-6 frequencies"> 1800 MHz </div></div>
        <div class="col-xs-12 col-sm-6 providers"> <i class="icon-G" title="4G Mobile Signal Boosters"></i></div>
        <div class="col-xs-12 col-sm-12 no-padding-left image">
            <?php
            /**
             * Hook: woocommerce_before_shop_loop_item_title.
             *
             * @hooked woocommerce_template_loop_product_link_open - 5
             * @hooked woocommerce_template_loop_product_thumbnail - 10
             * @hooked woocommerce_template_loop_product_link_close - 15
             */
            do_action( 'woocommerce_before_shop_loop_item_title' );
            ?>
        </div>
        <div class="product-price">
            <?php
            /**
             * Hook: woocommerce_after_shop_loop_item_title.
             *
             * @hooked woocommerce_template_loop_rating - 5
             * @hooked woocommerce_template_loop_price - 10
             */
            do_action( 'woocommerce_after_shop_loop_item_title' );
            ?>
        </div>
        <div class="col-xs-12 col-sm-12 no-padding-right product-action">
            <div class="col-xs-12 nopadding">
                <?php
                /**
                 * Hook: woocommerce_after_shop_loop_item.
                 *
                 * @hooked woocommerce_template_loop_product_link_close - 5
                 * @hooked woocommerce_template_loop_add_to_cart - 10
                 */
                do_action( 'woocommerce_after_shop_loop_item' );
                ?>
            </div>
        </div>
    </div>
</li>
