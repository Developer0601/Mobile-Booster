!function (e) {
    e(window).on("load", function () {
        setTimeout(function () {
            e("#loading-page").addClass("hidden");
        }, 1e3);
    }), e(document).ready(function () {
        e(this).scrollTop(0), e(window).scroll(function () {
            e(this).scrollTop() > 100 ? e(".navbar-primary").addClass("sticky-top") : e(".navbar-primary").removeClass("sticky-top"), e(window).width() >= 768 && (e(this).scrollTop() <= 50 ? e(".navbar-primary .main-header").css("top", 50 - e(this).scrollTop()) : e(".navbar-primary .main-header").css("top", 0));
        }), e(".main-header .mobile-trigger").on("click", function () {
            e(this).toggleClass("change"), e(".main-header").toggleClass("active");
        }), e(".main-header #right-menu ul li.menu-item-has-children").on("click", function () {
            e(".main-header #right-menu ul li.menu-item-has-children .dropdown-menu").hide(), e(this).find("ul.dropdown-menu").toggle("display");
        }), e("body.home .page-header-bg").remove(), e("#filter .provider .choice-icon").on("click", function () {
            e(this).toggleClass("choosen");
        }), e("#filter #range1").show(), e("#filter .trigger #1").addClass("active"), e("#filter .trigger #2").addClass("active LActive"), e("#filter-coverage-up-to-300-sqm").prop("checked", !0), e(".trigger ul li .text").hover(function () {
            e(this).prev().toggleClass("hover");
        }), e("#2 .bulet, #2 .text").on("click", function (show) {
            if (show) {
                $(".section.filter-custom.filter-custom2 form .back-img").css('background', 'url("/wp-content/themes/booster-template/assets/img/300-sql.jpg") no-repeat');
                $(".section.filter-custom.filter-custom2 form .back-img").css('background-size', '100% 100%');

            }  else {
                $(".section.filter-custom.filter-custom2 form .back-img").css('display', 'none');
            }
            e("#filter .coverage").removeClass("active"), e("#filter .coverage").hide(), e(this).parent().parent().find("li").removeClass("LActive"), e(this).parent().addClass("active LActive"), e("#filter #range1.coverage").show(), e("#3").removeClass("active"), e("#4").removeClass("active"), e("#5").removeClass("active"), e("#filter-coverage-up-to-300-sqm").prop("checked", !0);
        }), e("#3 .bulet, #3 .text").on("click", function (show) {
            if (show) {
                $(".section.filter-custom.filter-custom2 form .back-img").css('background', 'url("/wp-content/themes/booster-template/assets/img/500sql.jpg") no-repeat');
                $(".section.filter-custom.filter-custom2 form .back-img").css('background-size', '100% 100%');
            }  else {
                $(".section.filter-custom.filter-custom2 form .back-img").css('display', 'none');
            }
            e("#filter .coverage").removeClass("active"), e("#filter .coverage").hide(), e("#filter #range2.coverage").show(), e(this).parent().parent().find("li").removeClass("LActive"), e(this).parent().addClass("active LActive"), e("#4").removeClass("active"), e("#5").removeClass("active"), e("#filter-coverage-up-to-500-sqm").prop("checked", !0);
        }), e("#4 .bulet, #4 .text").on("click", function (show) {
            if (show) {
                $(".section.filter-custom.filter-custom2 form .back-img").css('background', 'url("/wp-content/themes/booster-template/assets/img/1000sql.jpg") no-repeat');
                $(".section.filter-custom.filter-custom2 form .back-img").css('background-size', '100% 100%');
            }  else {
                $(".section.filter-custom.filter-custom2 form .back-img").css('display', 'none');
            }
            e("#filter .coverage").removeClass("active"), e("#filter .coverage").hide(), e("#filter #range3.coverage").show(), e(this).parent().parent().find("li").removeClass("LActive"), e(this).parent().addClass("active LActive"), e("#2").addClass("active"), e("#3").addClass("active"), e("#5").removeClass("active"), e("#filter-coverage-up-to-1000-sqm").prop("checked", !0);
        }), e("#5 .bulet, #5 .text").on("click", function (show) {
            if (show) {
                $(".section.filter-custom.filter-custom2 form .back-img").css('background', 'url("/wp-content/themes/booster-template/assets/img/1500sql.jpg") no-repeat');
                $(".section.filter-custom.filter-custom2 form .back-img").css('background-size', '100% 100%');
            }  else {
                $(".section.filter-custom.filter-custom2 form .back-img").css('display', 'none');
            }
            e("#filter .coverage").removeClass("active"), e("#filter .coverage").hide(), e("#filter #range4.coverage").show(), e(this).parent().parent().find("li").removeClass("LActive"), e(this).parent().addClass("active LActive"), e("#2").addClass("active"), e("#3").addClass("active"), e("#4").addClass("active"), e("#5").addClass("active"), e("#filter-coverage-up-to-5000-sqm").prop("checked", !0);
        });

        // tm extra options
        $('.single-product form .tm-element-ul-checkbox li ').on('click', function () {
            $(this).toggleClass('active');
        })
        $('.5e6370f4a78375 .tc-label').on('click', function () {
            $('.5e6370f4a78375 .extra-cable-div .fa').toggleClass('rotated');
            $('.5e6370f4a78375 .extra-cable-ul').toggleClass('open');
        });
        $('.5e6370f4a78375 .extra-cable-div').append('<i class="fa fa-angle-down"></i>');
        $('.5e6370f4a78375 .extra-cable-div .fa').on('click', function () {
            $(this).toggleClass('rotated');
            $('.5e6370f4a78375 .extra-cable-ul').toggleClass('open');
        })
        $('.5e6370f4a78375 .extra-cable-ul li').on('click', function () {
            $(this).prependTo('.5e6370f4a78375 .extra-cable-ul');
        });
        $('.5e6370f4a783f4 .tc-label').on('click', function () {
            $('.5e6370f4a783f4 .warranty-div .fa').toggleClass('rotated');
            $('.5e6370f4a783f4 .warranty-ul').toggleClass('open');
        });
        $('.5e6370f4a783f4 .warranty-ul li').on('click', function () {
            $(this).prependTo('.5e6370f4a783f4 .warranty-ul');
        });
        $('.5e6370f4a783f4 .warranty-div').append('<i class="fa fa-angle-down"></i>');
        $('.5e6370f4a783f4 .warranty-div .fa').on('click', function () {
            $(this).toggleClass('rotated');
            $('.5e6370f4a783f4 .warranty-ul').toggleClass('open');
        });
    });
}(jQuery);

jQuery(document).ready(function ($) {
    $("#testimony .owl-carousel").owlCarousel({
        items: 1,
        dots: true,
    });
    // $("#home_featured .featured-items").owlCarousel({
    //     items: 4,
    //     navText: ['<span class="mb-prev"></span>', '<span class="mb-next"></span>'],
    //     nav: true,
    //     dots: false,
    // });


    // $('.slider1-button').on('click', function(e) {
    //     e.preventDefault();
    //
    //     $('html, body').animate(
    //         {
    //             scrollTop: $('.filter').offset().top,
    //         },
    //         500,
    //         'linear'
    //     );
    // });


    $("#owl-demo").owlCarousel({
            loop:true,
            dots:true,
            // autoplay:true,
            autoplayTimeout:6000,
            navigation : true, // Show next and prev buttons

            items : 1,
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
        });

    $('#home_featured .featured-items').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: false,
                dots: true,
            },
            700:{
                items:2,
                nav: false,
                dots: true,
            },
            900:{
                items:3,
                nav: true,
                dots: false,
            },

            1200:{
                items:4,
                navText: ['<span class="mb-prev"></span>', '<span class="mb-next"></span>'],
                nav: true,
                dots: false,
            }
        }
    })
    $('.single-product .product .main-content .left .images .thumbnails a').click(function (e) {
        e.preventDefault();
        var imageUrl = $(this).attr("data-img");
        $('.single-product .product .main-content .left .images .main-image a').html(Base64.decode(imageUrl));
    });
    objectFitImages();
});
var currentTab = 0;

function showTab(e) {
    var a = document.getElementsByClassName("tab");
    a[e].style.display = "block", document.getElementById("prevBtn").style.display = 0 == e ? "none" : "inline", e == a.length - 1 ? (document.getElementById("nextBtn").style.display = "none", document.getElementById("frm_submit_Btn").style.display = "inline") : (document.getElementById("nextBtn").style.display = "inline", document.getElementById("nextBtn").innerHTML = "NEXT STEP", document.getElementById("frm_submit_Btn").style.display = "none"), fixStepIndicator(e)
}

function nextPrev(e) {
    var a = document.getElementsByClassName("tab");
    if (a[currentTab].style.display = "none", (currentTab += e) >= a.length) return document.getElementById("regForm").submit(), !1;
    showTab(currentTab)
}

function validateForm() {
    var e, a, t = !0;
    for (e = document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"), a = 0; a < e.length; a++) "" == e[a].value && (e[a].className += " invalid", t = !1);
    return t && (document.getElementsByClassName("step")[currentTab].className += " finish"), t
}

function fixStepIndicator(e) {
    var a, t = document.getElementsByClassName("step");
    for (a = 0; a < t.length; a++) t[a].className = t[a].className.replace(" active", "");
    t[e].className += " active"
}
function toggleFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
showTab(currentTab);