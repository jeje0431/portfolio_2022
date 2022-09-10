// 문서가 로딩이 끝났을 때 이런내용을 할거다.
$(document).ready(function(){
    //stat라는 변수를 만들고 0을 넣어둔다.
    //#ham이 눌렸을 때 이런 내용을 할거다.
        //만약 stat이 0이라면
            //#mlnb의 right 값을 0으로 바꾼다. 
            //다음을 위해 stat을 1로 바꾼다.
            //방금누른그것에게 cl이라는 클래스를 준다.
        //근데그게아니라면 
            //#mlnb의 right값을 -320px로 바꾼다.
            //다음을위해 stat을 0으로 바꾼다.
            //방금누른그것에게 cl이라는 클래스를 뺏는다.
    
    var stat = 0;
    $("#ham").click(function(){
        if(stat == 0) {
            $("#mlnb").css("right","0px");
            stat = 1;
            $(this).addClass("cl");
        } else {
            $("#mlnb").css("right", "-110%");
            stat = 0;
            $(this).removeClass("cl");
        }
    });
    
    //#sub안에 들어있는 a가 몇개인지 파악해서
    //그 숫자를 alen이라고 하자. 
    //#sub a에게 스타일을 줄건데 
    //  "width"라는 스타일의 값을 
    // "calc(100% / " + alen + ")" 이라고 준다. 
    
    var alen = $("#sub a").length;
    $("#sub a").css("width","calc(100% / " + alen + ")");
    
    $(".list-circle").each(function(){
        //지금이것 안에있는 li태그가 몇개인가? 그것을 len이라고 하자. 
        //len만큼 반복하자
            // 지금이것 안에있는 li태그 중에 i번째 li태그의 앞쪽에
            // <span class='list-circle-num'> (i+1) "</span>을 넣는다.
        var len = $(this).children("li").length;
        for(i=0; i<len; i++){
           $(this).children("li").eq(i).prepend("<span class='list-circle-num'>"+(i+1)+"</span>")
        }
    });
    
    $(".list-double").each(function(){
        var len = $(this).children("li").length;
        for(i=0; i<len; i++){
            var num;
            if(i < 9){
                num = "0" + (i+1);
            }else{
                num = i+1;
            }
           $(this).children("li").eq(i).prepend("<span class='list-double-num'>" + num + "</span>")
        }
    });
    
    // #sub a를 눌렀을때 다음과같은 일이 벌어진다.
        // 응당해야할 일을 일단 하지말자.
        // 방금누른 그것은 형제들중 몇번째인가? num이라고 부르자. 
        // 모든 #sub a들로부터 "subactive"라는 클래스를 뺏고
        // 방금누른그것에만 "subactive"라는 클래스를 준다
        // 모든 .tab을 숨겨주고 
        // .tab중에서 num번째만 보여준다.
    
               
    // #sub a가 눌렸을때 다음과같은 일이 벌어질 것이다.
        //방금눌린그것 안에들어있는글씨가 무엇인가?->txt라고 하자. 
        //#bread a 중에서 세번째에게 글씨를 쓰되 txt의 내용을 쓰자. 
    
    $("#sub a").click(function(e){
       e.preventDefault();
        var num = $(this).index();
        $("#sub a").removeClass("subactive");
        $(this).addClass("subactive")
        $(".tab").hide();
        $(".tab").eq(num).show();
        
        var txt = $(this).text();
        $("#bread a:last-of-type").text(txt);
        

    
    });
    
    //#content 안에있는 table태그들에게 각각 다음과 같이 이야기하겠다.
        //그것 전에 "<div class='tablebox'></div>"를 만든다. 
        //그것을 복제해서 그것의 형 .tablebox안에 넣어둔다. 
        //그것을 삭제한다.

    $("#content table").each(function(){
        $(this).before("<div class='tablebox'></div>");
        $(this).clone().appendTo($(this).prev(".tablebox"));
        $(this).remove();
        
    });
    
    
    //#typeclone을 누를때 이런일이 벌어질 것이다.
        //#tbot을 보였다/숨겼다. 
    $("#typeclone").click(function(){
       $("#tbot").toggle(); 
    });
    // .titem을 눌렀을때 이런일이 벌어질 것이다. 
        //방금눌린그것이 몇번째인가? -> num 
        //방금눌린그것의 안쪽에 내용은? ->txt
        //#ttop의 내용을 txt라고 만들고 
        //#type 안에 들어있는 option중에 num번째가 
            //선택된 것처럼 만들기. 
    
    $(".titem").click(function(){
        var num = $(this).index();
        var txt = $(this).text();
        $("#ttop").text(txt);
        $("#type option").eq(num).attr("selected", "true");
    });
});



























