$(document).ready(function () {
    $(".design").click(function () {
        $("#design_image, #design_text").toggle();
    })
    $(".dev").click(function () {
        $("#dev_image, #dev_text").toggle();
    })
    $(".product").click(function () {
        $("#product_image, #product_text").toggle();
    })
});