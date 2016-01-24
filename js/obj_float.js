$(function () {
    setTimeout('animation()');
});

function animation() {
    $('#chino').animate({
        marginTop: '-=15px'
    }, 2000).animate({
        marginTop: '+=15px'
    }, 2000).animate({
        marginTop: '-=15px'
    }, 2000).animate({
        marginTop: '+=15px'
    }, 2000);

    $('#megumaya').animate({
        marginTop: '+=20px'
    }, 2000).animate({
        marginTop: '-=20px'
    }, 2000).animate({
        marginTop: '+=20px'
    }, 2000).animate({
        marginTop: '-=20px'
    }, 2000);

    $('#moon').animate({
        marginTop: '-=10px'
    }, 4000).animate({
        marginTop: '+=10px'
    }, 4000);

    $('.star1').animate({
        marginTop: '-=20px'
    }, 2000).animate({
        marginTop: '+=20px'
    }, 2000).animate({
        marginTop: '-=20px'
    }, 2000).animate({
        marginTop: '+=20px'
    }, 2000);

    $('.star2').animate({
        marginTop: '+=25px'
    }, 4000).animate({
        marginTop: '-=25px'
    }, 4000);

    setTimeout('animation()', 8000);
}
