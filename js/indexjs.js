$(function(){ /*배너 버튼 */
    var showBanner=0;

    function fadeBanner(){
        $(".images>li").eq(showBanner).stop().fadeIn(500)
        .siblings().fadeOut(500);
    }
    $("mainBtn>li").click(function(){
        showBanner = $(this).index();
        fadeBanner();
    })
    $(".right").click(function(){
        if(showBanner<2){
            showBanner++;
        }
        else{
            showBanner=0;
        }
        fadeBanner();
    })
    $(".left").click(function(){
        if(showBanner>0){
            showBanner--;
        }
        else{
            showBanner=2;
        }
        fadeBanner();
    })
    var timer = setInterval(autoBanner,3000)

        function autoBanner(){
            $(".right").trigger("click");
        }
})

// 프로모션 버튼  
$(function(){
    var proBanner = 0;

    function wrapBanner(){
        $(".proWrap>li").eq(proBanner).stop().fadeIn(500)
        .siblings().fadeOut(500);
    }
    $(".proBtn").click(function(){
        proBanner = $(this).index();
        wrapBanner();
    })

    $(".proBtn>li").eq(0).click(function(){
        if(proBanner>0){
            proBanner--;
        }
        else{
            proBanner=1;
        }
        wrapBanner();
    })
    $(".proBtn>li:eq(1)").click(function(){
        if(proBanner<1){
            proBanner++;
        }
        else{
          proBanner=0;  
        }
        wrapBanner();
    })
    var timer = setInterval(autopro,3000)
        function autopro(){
            $(".proBtn>li:eq(1)").trigger("click");
        }
})
//메뉴랩
$(function(){
    var wWidth=$(window).outerWidth();
    $(window).resize(function(){
        wWidth=$(window).outerWidth();
        if(wWidth>770){
            $(".botGnb").css("display","none");
        }
        else{
            $(".botGnb").css("display","block");
        }
    })
    $(".ham").click(function(){
        $(".menuWrap").stop().animate({
            "right":0
        },500)
        $(".botGnb").css({
            "display":"none"
        })
        $(".ham").css({
            "display":"none"
        })
        $(".bg").css({
            "display":"block"
        })
    })
    $(".bg").click(function(){
        // $(".menuWrap").css("display","none");
        // $(".bg").css("display","none");
        // $(".ham").css("display","block");
        $(".botGnb").css("display","block");
        $(".ham").fadeIn(500);
        $(".bg").slideUp(500);
        $(".menuWrap").css("right",-100+"%");
    })
      
    
    // $(".closeBtn").click(function(){
    //     $(".menuWrap").slideUp(1000);
    // })
    
})
//resize
// $(function(){
//     // var wWidth=$(window).outerWidth();
//     // $(window).resize(function(){
//     //     wWidth=$(window).outerWidth();
//     // })
//     // if(wWidth>770){
//     //     $(".botGnb").css("display","none");
//     // }
// })