$(document).ready(function () {

    //toggle between image and description
    $(".design").click(function () {
        $("#design_image, #design_text").toggle();
    })
    $(".dev").click(function () {
        $("#dev_image, #dev_text").toggle();
    })
    $(".product").click(function () {
        $("#product_image, #product_text").toggle();
    })


    $(".portfolio .col-md-3 img").hover(function () {
        $(this).css("opacity", "0.4");
    }, function () {
        $(this).css("opacity", "1");
    });

});