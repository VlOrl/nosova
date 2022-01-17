$(".content_block_services").click(function(event) {
    $(".content_block_services").removeClass("active");
    $(this).addClass("active");
});
$(".block_check").click(function(event) {
    $(".block_check").removeClass("active");
    $(this).addClass("active");
});
$('.burger_header').click(function(event){
    $('.burger_header, nav, .header_inner').toggleClass('active');
    $('body').toggleClass('lock');
});
$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
    return false;
});