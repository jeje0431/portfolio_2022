$(document).ready(function(){
   $("#train").on('mousewheel',function(e){
		var wheelDelta = e.originalEvent.wheelDelta;
		if(wheelDelta > 0){
			console.log("up");
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}else{
		console.log("down");
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}
   });
    
    function sizecheck(){
        var w = $(window).width();
        var cw = $(".cen").width();
        $(".dummy").width((w -cw) / 2);
    };
    
    sizecheck();
    
    $(window).resize(function(){
        sizecheck();
    });
    
    
    
});