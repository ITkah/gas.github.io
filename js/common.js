$(document).ready(function() {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
    });

    $(".call-menu").on("click", function(){
        $("nav").slideToggle(200);
    });

});