$(document).ready(function () {
    //버튼 클릭하면, 전체 메뉴를 보이게 하세요.
    $(".tit .btn").click(function (e) {
        e.preventDefault();
        $("#cont_nav").slideToggle();
        $(this).toggleClass("on");
    });
    //e.preventDefault(); : a는 기본적으로 클릭이벤트를 가지고 있는데,
    //보통 #을 넣어서 href의 이동을 막는데 저 태그로 제이쿼리의 클릭 이벤트 막는거임.
    // $("#cont_nav").css("display","block");
    // $("#cont_nav").show();
    // $("#cont_nav").toggle(); //껏다켰다 가능

    // $("#cont_nav").fadeIn(); //서서이나타남.
    // $("#cont_nav").fadeToggle(); //껏다켰다 가능

    // $("#cont_nav").slideDown(); //밑에서 아래로 나타남.
    // $("#cont_nav").slideToggle(200); //껏다켰다 가능
    //onclass를 추가해서 버튼 기능을 추가함
    // $("#cont_nav").toggleClass("on"); //껏다켰다 가능, this 자기자신을 가리킴.

    //slick 배너 슬라이드
    // html 마크업 셋팅 - css연동 - 제이쿼리연동  - 제이쿼리호출
    $(".ban").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplayspeed: 2000,
        dots: true,
    });

    //tab메뉴
    var $tab_list = $(".tab_menu");

    $tab_list.find("ul ul").hide();
    $tab_list.find("li .active > ul").show();

    function tabMenu(e) {
        e.preventDefault();
        var $this = $(this);
        $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
        //메서드만 알면 연결해서 설명그대로 넣을 수있음.
    }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);



//탭 메뉴
// var $tab_list = $(".tab_menu");

// $tab_list.find("ul ul").hide();
// $tab_list.find("li.active>ul").show();

// function tabMenu(e){
//     e.preventDefault();
//     var $this = $(this);
//     $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
// }
// $tab_list.find(">ul>li>a").click(tabMenu).focus(tabMenu);

/*레이어팝업*/
    $("#layerpopup").click(function (e) {
        e.preventDefault();
        // $("#layer").css("display","block");
        $("#layer").show();
        // $("#layer").fadeIn();
        // $("#layer").slideDown();
    });

    $(".close").click(function (e) {
        e.preventDefault();
        // $("#layer").css("display","none");
        $("#layer").hide();
        // $("#layer").fadeOut();
        // $("#layer").slideUp();
    });

    $("#windowpopup").click(function (e) {
        e.preventDefault();
        window.open("windowpopup.html", "popup01", "width=800, height=570, left=50, top=50, scrollbars=0, toolbar=0, menubar=no");
    });
    //window("파일명", "파일이름", "옵션설정");
    //옵션: left, top, width, status, toolbar, location,
    //menubar, scrollbars, fullscreen
    //그냥 아에 창으로 나오는 거임.

    //라이트박스
    //레이어팝업이랑, 이미지슬라이드랑 합쳐진것

    /*lightgallerybox*/
    $("#lightgallery").lightGallery();


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


});