function zoomInText(baba){
$(baba).css("font-size", "+=0.5em");
}

function zoomOutText(baba){
$(baba).css("font-size", "-=0.5em")
}
//MODAL DIALOG J_QUERY-PLUGIN

$("img").hover(function(){
 $("img").css("webkit-filter", "blur(0.8px)");
  $(this).css("webkit-filter", "blur(0px)")

  },
function(){
  $("img").css("webkit-filter", "blur(0px)");

  });

$("h2").hover(function(){
                        $(this).css("font-size", "+=0.02em");
                        }, 
              
              function(){$(this).css("font-size", "-=0.02em");
                        $("body").css("webkit-filter", "blur(0px)");});

$(".item").hover(function(){$(this).css("font-size", "+=0.02em")}, 
              function(){$(this).css("font-size", "-=0.02em")});
