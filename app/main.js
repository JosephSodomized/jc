$(document).ready(function () {

    $('.logo').click(function () {
        $('.sidebar').toggle( "slide" );
        $('#main').toggleClass("mx-auto");
    });

});