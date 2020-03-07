$( document ).ready(function() {

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
      });
      
      $(".button").on("click",function (e) {

        e.preventDefault();
         
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }

        function text(elem) {
            var regex = /^[a-zA-Z ]{1,30}$/;
            return regex.test(elem);
        }
          
          function validate() {
            var email = $(".email").val();
            var name = $(".name").val();
            var subject = $(".subject").val();
            var textarea = $("textarea").val();
          
            if (!validateEmail(email)) {
                $(".email").css("border","1px solid red");
            }else{
                $(".email").css("border","1px solid dimgrey")
            }

            if (!text(name)) {
                $(".name").css("border","1px solid red");
            }else{
                $(".name").css("border","1px solid dimgrey")
            }

            if (!text(subject)) {
                $(".subject").css("border","1px solid red");
            }else{
                $(".subject").css("border","1px solid dimgrey")
            }

            if (textarea == "" || textarea == " ") {
                $("textarea").css("border","1px solid red");
            }else{
                $("textarea").css("border","1px solid dimgrey")
            }

            if (validateEmail(email) && text(name) && text(subject) && !textarea == "" && !textarea == " ") {
                $(".back").css("display","block");
                $(".exit").css("display","block");
                $(".add").css("display","block");
                $(".email").val("");
                $(".name").val("");
                $(".subject").val("");
                $("textarea").val("");
            }
            return false;
          }
          validate();

          $(".exit").on("click",function(){


            $(".back").css("display","none");
            $(".exit").css("display","none");
            $(".add").css("display","none");
          })
          
    
    });
    document.addEventListener('contextmenu', event => event.preventDefault());
});