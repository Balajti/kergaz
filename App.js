const indicator = document.getElementById("nav-indicator");
const items = document.querySelectorAll('.nav-item');

$(function() {
    $(".nav-item1").on("click", function() {
      $(".indicator").css({
        transition: "transform 0.5s",
        transform: "translate(0, 0)"
      });
      $(".nav-item1").addClass("is-active")
      $(".nav-item2").removeClass("is-active")
      $(".nav-item3").removeClass("is-active")
    });
  
    $(".nav-item2").on("click", function() {
      $(".indicator").css({
        transition: "transform 0.5s",
        transform: "translate(125px)"
      });
      $(".nav-item2").addClass("is-active")
      $(".nav-item1").removeClass("is-active")
      $(".nav-item3").removeClass("is-active")
    });
  
    $(".nav-item3").on("click", function() {
      $(".indicator").css({
        transition: "transform 0.5s",
        transform: "translate(252px)"
      });
      $(".nav-item3").addClass("is-active")
      $(".nav-item1").removeClass("is-active")
      $(".nav-item2").removeClass("is-active")
    });
    $(".cs1").on("click", function(){
        $(this).toggleClass("rotate")
        setTimeout(function() {
            $(".b1").toggle();
            $(".f1").toggle();
          }, 100);
        
    })
    $(".cs2").on("click", function(){
        $(this).toggleClass("rotate")
        setTimeout(function() {
            $(".b2").toggle();
            $(".f2").toggle();
          }, 100);
        
    })
    $(".cs3").on("click", function(){
        $(this).toggleClass("rotate")
        setTimeout(function() {
            $(".b3").toggle();
            $(".f3").toggle();
          }, 100);
        
    })
    $(".cs4").on("click", function(){
        $(this).toggleClass("rotate")
        setTimeout(function() {
            $(".b4").toggle();
            $(".f4").toggle();
          }, 100);
        
    })
    $(".cs5").on("click", function(){
        $(this).toggleClass("rotate")
        setTimeout(function() {
            $(".b5").toggle();
            $(".f5").toggle();
          }, 100);
        
    })
    $(".cs6").on("click", function(){
        $(this).toggleClass("rotate")
        setTimeout(function() {
            $(".b6").toggle();
            $(".f6").toggle();
          }, 100);
        
    })
    $(".tovabbiKepek").on("click", function(){
        $(".kep1").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep2").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep3").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep4").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep5").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep6").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep7").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        setTimeout(function() {
            $(".images").hide();
            $(".moreImage").show();
            $(".kevesebbKepek").show();
            $(".tovabbiKepek").hide()
            $(".galeria").addClass("galeriaOpen")
        }, 700);
    })
    $(".kevesebbKepek").on("click", function(){
        $(".kep1").css({
            transition: "transform 0.5s",
            transform: "translate(-530px)"
        });
        $(".kep2").css({
            transition: "transform 0.5s",
            transform: "translate(-200px, 50px)"
        });
        $(".kep3").css({
            transition: "transform 0.5s",
            transform: "translate(-150px, 350px)"
        });
        $(".kep4").css({
            transition: "transform 0.5s",
            transform: "translate(-550px, 330px)"
        });
        $(".kep5").css({
            transition: "transform 0.5s",
            transform: "translate(200px)"
        });
        $(".kep6").css({
            transition: "transform 0.5s",
            transform: "translate(200px, 280px)"
        });
        $(".kep7").css({
            transition: "transform 0.5s",
            transform: "translate(300px, 450px)"
        });
        
        setTimeout(function() {
            $(".moreImage").hide();
            $(".images").show();
            $(".kevesebbKepek").hide();
            $(".tovabbiKepek").show();
            $(".galeria").removeClass("galeriaOpen")
        }, 700);
        
    })
    
    $(".burger").addClass("unToggled");
    $(".burger").on("click", function () {
        $(this).toggleClass("toggled");
        $(this).toggleClass("unToggled");
        $(".minimenu").toggle()
    });

});
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};




