$(window).on("load",function(){
  $(".animate").fadeOut();
});


$( document ).ready(function() {

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
      });
      
   

      $(window).on("scroll",function(){

        if ($(this).scrollTop() > 50) {
          $(".top").css({"opacity":1});
        }else{
          $(".top").css({"opacity":0});
        }

      })

      $(".clickable").on("click",function(){
        $("html").css("cursor","zoom-out");
        $(".cover").css("display","block");
        $(".coverimage").css({"display":"block","cursor":"default"}).attr("src",$(this).attr("src"));
        $(".exit").css("display","block");
       $("html").css({"margin": 0, "height": "100%", "overflow": "hidden"});
      })

$(".cover").click(function(event) {                    
        if(!$(event.target).closest('.coverimage').length)
        {
        $("html").css("cursor","default");
        $(".cover").css("display","none");
        $(".coverimage").css("display","none").attr("src","");
        $(".exit").css("display","none");
        $("html").css({"margin": 0, "height": "", "overflow": ""});               
        }
     }); 


        $(".top").on("click",function(){
          $("html").animate({ scrollTop: 0 }, 1500);
        });


});

document.addEventListener('contextmenu', event => event.preventDefault());