
$(document).ready(function(){
    $(".gallery_img").slick({
      arrows:false,
      autoplay:true,
      fade:true,
      slidesToShow: 1,
      autoplaySpeed: 1000,
    });
    $(".play").click(function(){
        $(".gallery_img").slick("slickPlay");
      });
      $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
      });
      $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
      });
      $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
      });
    //   $('.gallery_btn > button').click(function(){
    //     $('button:hover').css('border','none');
    //   });
  });