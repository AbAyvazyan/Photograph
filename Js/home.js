$( document ).ready(function() {

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
      });
      
   

      $(window).on("scroll",function(){

        if ($(this).scrollTop() > 200) {
          $(".top").css({"opacity":1});
        }else{
          $(".top").css({"opacity":0});
        }

      })


      $(".top").on("click",function(){
        $("html").animate({ scrollTop: 0 }, 1500);
      });

      document.addEventListener('contextmenu', event => event.preventDefault());
});