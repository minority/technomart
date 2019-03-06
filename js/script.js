$(document).ready(function () {
    $('.stock-slider-list').slick({
        dots: true,
        dotsClass: "stock-slider-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.stock-slider-prev'),
        nextArrow: $('.stock-slider-next')
    });

    $('.service-tab').click(function () {
        var selectedTab = $(this).data('tab');
        var selectedElement = $('.service-content-' + selectedTab);

        $('.service-content div').addClass('hidden');
        selectedElement.removeClass('hidden');

        $('.service-tab').removeClass('active-tab');
        $(this).addClass('active-tab');
    });

    $('.modal-close').click(function () {
        $(this).parent('.modal').hide();
    });

    $('#modal-map').click(function () {
        $('.modal-map').show();
    });

    $('#modal-feedback').click(function () {
        $('.modal-feedback').show();
    });

    $('.button-buy').click(function () {
        $('.modal-add-basket').show();
    });

    $('.button-continue').click(function () {
        $('.modal-add-basket').hide();
    });
});
