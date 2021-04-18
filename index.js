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

    //add hover effect and text to each project
    $('.project1').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p1').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p1').addClass('text');
    });

    $('.project2').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p2').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p2').addClass('text');
    });
    $('.project3').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p3').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p3').addClass('text');
    });
    $('.project4').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p4').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p4').addClass('text');
    });
    $('.project5').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p5').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p5').addClass('text');
    });
    $('.project6').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p6').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p6').addClass('text');
    });
    $('.project7').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p7').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p2').addClass('text');
    });
    $('.project8').hover(function () {
        $(this).css("opacity", "0.7");
        $('.p8').removeClass('text');
    }, function () {
        $(this).css("opacity", "1");
        $('.p8').addClass('text');
    });

    document.getElementById('submit').addEventListener('click', function () {
        var username = $("#mce-NAME").val();
        var email = $("#mce-EMAIL").val();
        var message = $("#message").val();
        if ($("#mce-NAME").val() && $("#mce-EMAIL").val() && $("#message").val()) {
            alert("Hi " + username + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please fill all fields!");
        }
    })
});