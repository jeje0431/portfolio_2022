//html 문서가 준비가 끝나면 그거 하자.
$(document).ready(function(){
//    .main을 누르면 
//    모든 .sub를 모조리 서서히 숨겨주고, 
//    방금누른그것의 자식
//    .sub를 서서히 보여주자.
    $(".main>a").click(function(){
        $(".sub").stop().fadeOut().removeClass("show");
        $(this).next(".sub").stop().fadeToggle().addClass("show");
    });
    
//    .sub>.cen>ul>li를 누르면 
//    모든 .ssub를 모조리 숨겨주고 
//    방금누른그것 의 자식 .ssub를 보여주자.
    
    $(".sub>.cen>ul>li").click(function(){
        $(".ssub").hide();
        $(this).children(".ssub").show();
    });
    
//#lang을 눌렀을 때 
//그 안에 들어있는 #langsel을 보였다가/숨겼다가를 번갈아 시행.
    $("#lang").click(function(){
        $("#langsel").toggle(); 
    });
    
//    stat이라는 변수를 만들고 거기에 0을 넣어두자. (variable=변수)
//    만약 stat안에 0이 들어있으면 그건 #mlnb가 안보이고 있는 중 
//    만약 stat안에 1이 들어있으면 그건 #mlnb가 보여지는 있는 중
    var stat = 0;
//    #ham을 클릭했을 때 
//    먼저 stat의 내용을 확인해보고 
//    "만약" stat이 0이라면 
    //    #mlnb를 보여준다. 그리고 stat을 1로 바꿔준다. 
    //    #ham안에 img의 주소를 "Image/btn_menuCls.png"로 바꿔준다.
//    그게아니라면
    //    #mlnb를 숨겨준다. 그리고 stat을 0으로 바꿔준다.
    //    #ham안에 img의 주소를 "Image/btn_all.png"로 바꿔준다.
    
    $("#ham").click(function(){
       if(stat == 0){
           $("#mlnb").show();
           stat = 1;
       }
        else{
           $("#mlnb").hide();
           stat = 0;
       }
    });
    
//    .mmain을 클릭했을 때
//    방금누른그것을 제외하고 다른 형제들 안에있는 .msub를 숨겨준다.
//    방금누른그것을 제외하고 다른형제들 안에있는 
//    a안에있는 span에서 minus라는 이름의 클래스를 뺏는다.
//    방금 누른그것 안에있는 .msub를 토글한다.
//   방금누른그것 안에있는 a안에있는 span에게 
//   "minus"라는 클래스를 토글한다.       

    $(".mmain").click(function(){
        $(this).siblings().children(".msub").slideUp();
        $(this).siblings().children("a").children("span").removeClass("minus")
        $(this).children(".msub").slideToggle();
        $(this).children("a").children("span").toggleClass("minus");
    });
    
    //  우리가 가지고 있는 그림의 번호 : 0 1 2 3 4 5 6
    //  지금 우리가 보고 있는 그림의 번호 cur라고 하자. = 0
    
    //.next버튼을 눌렀을때 아래내용을 실행한다.
        //  cur에 1을 더하면 <- 지금 새로 봐야할 그림의 번호!!!
        //  의심!! 만약 그렇게 만들어진 새 번호가 7보다 같거나크다면 
        //  cur를 0이라고 하자.
        //  모든 .slide를 숨겨주고 
        //  .slide중에서 cur번째 그림을 보여주기.
    
    //.prev버튼을 눌렀을때
        //  cur에 1을 빼면 <- 지금 새로 봐야할 그림의 번호!!!
        //  의심!! 만약 그렇게 만들어진 새 번호가 0보다 작다면 
        //  cur를 6이라고 하자.
        //  모든 그림을 숨겨주고 
        //  .slide중에서 cur번째 그림을 보여주기.  
//     var cur = 0;
//    $(".next").click(function(){
//        cur = cur + 1; 
//        if(cur >= 7){
//            cur = 0;
//        }
//        $(".slide").fadeOut();
//        $(".slide").eq(cur).fadeIn();
//    });
//    
//    $(".prev").click(function(){
//        cur = cur - 1; 
//        if(cur < 0){
//            cur = 6;
//        }
//        $(".slide").fadeOut();
//        $(".slide").eq(cur).fadeIn();
//    });
    var cur = 0;
    function sliding(dir){
        cur = cur + dir;
        if(cur >= 7){
            cur = 0;
        }else if(cur < 0){
            cur = 6;
        }
        $(".slide").fadeOut();
        $(".slide").eq(cur).fadeIn();
        $(".dot").removeClass("active");
        $(".dot").eq(cur).addClass("active");
    }
    
    $(".next").click(function(){
        sliding(1);
    });
    $(".prev").click(function(){
        sliding(-1);
    });

    //dot을 눌렸을때 
    //지금누른그것은 .dot중에서 몇번째인가? 그것을 num이라고 하자
    //cur를 잠심 0으로 바꿔치기 해 두고 sliding(num) 
    $(".dot").click(function(){
        var num = $(this).index(".dot");
        cur = 0;
        sliding(num);
    });

    var stop = "no";
    var auto = setInterval(sliding, 4000, 1);
    $(".prev, .next, .dot").mouseover(function(){
        clearInterval(auto);
    });
    $(".prev, .next, .dot").mouseout(function(){
        if(stop == "no"){
        auto = setInterval(sliding, 4000, 1);
            }
    });
    
    $("#mv .play").click(function(){
        clearInterval(auto);
        auto = setInterval(sliding, 4000, 1);
        stop = "no";
    });
    
    $("#mv .pause").click(function(){
        clearInterval(auto);
        stop = "yes";
    });
    
    
});

