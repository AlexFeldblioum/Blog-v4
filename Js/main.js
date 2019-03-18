$(document).ready(function(){

    $("nav a.mobile_menu").on("click", function(){

        var currentNavHeight = $("nav").height();

        if( currentNavHeight < 5){

            var navNewHeight = $("nav > ul").height() + 10;
            $("nav").animate({"height" : navNewHeight + "px"}, 750);

        }else{

            $("nav").animate({"height" : "0px"}, 750, function(){
                $(this).removeAttr("style");       
            });

        }
    });

    $(window).resize(function(){

        if( $(this).width() > 670){
            $("nav").removeAttr("style");
        }

    })
});

