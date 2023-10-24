/*----BURGER:---*/

$('.burger').click(function () {
    $(this).toggleClass('active');
    $('nav').slideToggle();
})


/*----POPUP:----*/

/*чтобы открыть попап: */
$('.popup-button').click(function () {
    $('.popup-wrapper').addClass('active');
    const target = $(this).data('target');
    $(target).addClass('active')
})
/*чтобы закрыть попап:*/
$('.popup-wrapper, .popup-window .close').click(function (event) {
    if (this === event.target) {
        $('.popup-wrapper').removeClass('active');
        $('.popup-window').removeClass('active');
    }
})

