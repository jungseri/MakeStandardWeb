$(document).ready(function(){
$(".layer").click(function(e){
e.preventDafault();
// $("#layer").css("display","block");
// $("#layer").slideDown();
$("#layer").show();
// $("#layer").fadeIn();

});
$(".close").click(function(e){
// e.preventDafault();
 
    $("#layer").hide();
    // $("#layer").css("display","none");
// $("#layer").slideUp();
// $("#layer").fadeOut();
    });


//window("파일명", "파일이름", "옵션설정");
//옵션: left, top, width, status, toolbar, location,
//menubar, scrollbars, fullscreen
//그냥 아에 창으로 나오는 거임.

//라이트박스
//레이어팝업이랑, 이미지슬라이드랑 합쳐진것

/*lightgallerybox*/

$("#lightgallery").lightGallery(); 
});