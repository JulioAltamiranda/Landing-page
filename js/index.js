$(document).ready(function () {
    //===============OwlCarousel===============
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1700,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
    });
    //===============Toggle items===============

    $(".toggle-items").eq(0).click(function () {
        $(".fa-plus").eq(0).toggleClass("fa-window-minimize");
        $(".toggle-content").eq(0).slideToggle();
    });
    $(".toggle-items").eq(1).click(function () {
        $(".fa-plus").eq(1).toggleClass("fa-window-minimize");
        $(".toggle-content").eq(1).slideToggle();
    });
    $(".fa-bars").click(function () {
        $(this).toggleClass("fa-times");
        $(".mobile-navbar nav").slideToggle();
    });

    //===============Sticky header===============

    $(window).on("scroll", function () {
        var menu = $(".desktop-navigation");
        var scroll = $(this).scrollTop();
        if (scroll > 0) {
            menu.addClass('sticky')
        } else {
            menu.removeClass('sticky')
        }
    });

    //===============Add animations===============

    $(".banner-img").addClass('animate');
    $(".banner-text").addClass('animate');
    $(".banner-text").addClass('animate');
    service1 = $(".service1");
    box = $(".service1 .box");
    serviceImg = $(".service-second-content .service-img")
    serviceText = $(".service-second-content .service-text");
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll >= serviceText.offset().top - 490) {
            serviceText.addClass('animate');
            serviceImg.addClass('animate');
        }
        if (scroll >= service1.offset().top - 400) {
            service1.addClass('animate')
        }
        for (var i = 0; i < box.length; i++) {
            if (scroll >= box.eq(i).offset().top - 400) {
                box.eq(i).addClass('animate')
            }
        }
    })
});