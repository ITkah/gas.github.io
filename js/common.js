$(document).ready(function() {

    $(".call-menu").on("click", function() {
        $("nav").slideToggle(200);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.simple-head').addClass("fixed-header");
        } else {
            $('.simple-head').removeClass("fixed-header");
        }
    });

    $(".contact-form").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: form_data,
            success: function() {
                $('.popup-with-form').click();
            },
            error: function(error) {
                $('.popup-with-form').click();
                console.log(error);
            }
        });
        return false;
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.single').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        margin: 10,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
    });



});