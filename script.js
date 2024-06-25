$(document).ready(function () {
    $('#open').click(function () {
        $('#envelope').toggleClass('open');
    });

    $('#reset').click(function () {
        $('#envelope').removeClass('open');
    });
});
