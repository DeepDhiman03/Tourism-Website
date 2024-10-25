$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.slider4').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.slider3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$(document).ready(function(){
    $(document).on("mouseover", ".hover_efftd", function(){
        $(this).find(".type").addClass("hover_effect");
    });
    
    $(document).on("mouseout", ".hover_efftd", function(){
        $(this).find(".type").removeClass("hover_effect");
    });
    
});

$(document).on("click", ".action-buttons .dropdown-menu", function(e){
	e.stopPropagation();
});