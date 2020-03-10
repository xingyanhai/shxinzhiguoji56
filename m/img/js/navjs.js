$(function(){
$("#navbtn").click(function() {
    $("#fnavlist").stop().animate({
        right: "0px"
    },
    300);
    $(this).hide();
    $("#hidenav").show();
});
$("#hidenav").click(function() {
    $("#fnavlist").stop().animate({
        right: "-1000px"
    },
    300);
    $(this).hide();
    $("#navbtn").show();
});
});