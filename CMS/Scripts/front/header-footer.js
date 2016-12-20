/*Nút tìm kiếm trên di động*/
$("#button-search").click(function () {
    console.log($("#search-box").is(":visible"));
    if (!$("#search-box").is(":visible")) {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "none");
    } else {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "solid 2px rgb(61, 90, 254)");
    }
});