$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-100
    }, 500);
});

$(window).scroll(function () {

if ($(window).scrollTop() >= 1) {
$('.menu').css({'background':'rgba(255,255,255,0.9)', 'padding':'5'});
} else {
$('.menu').css('background','transparent');
}
});
