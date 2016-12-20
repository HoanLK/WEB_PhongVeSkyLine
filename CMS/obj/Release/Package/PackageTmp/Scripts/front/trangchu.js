/*Slide dự án tiêu biểu*/
$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('#myCarousel').on('slid.bs.carousel', function () { });
});