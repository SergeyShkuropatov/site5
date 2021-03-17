$(document).ready(function () {
     // burger
     var burgerNavWidth = $(window).width();
     $('.burger').on('click',function(){
         if($('.burger-nav').hasClass('animated')) return;//если есть 
         //класс animated, то выходим из события
         $(".burger-nav").addClass('animated');
             if($(".burger").hasClass('active')) {
          $(".burger-nav").animate({
             'left': $(window).width() + 'px'
         }, 1000, function(){
             $('.burger-nav').removeClass('animated');
         });
          $(".burger").removeClass('active');
          }else  {
             $(".burger-nav").animate({
                 'left': 0
             }, 1000,function(){
                 $('.burger-nav').removeClass('animated'); 
             });
           $(".burger").addClass('active');
         }
      });
     
      $(window).resize(function(){
         let burgerNavWidth = $(window).width();
         $(".burger-nav").css({'left': burgerNavWidth + "px"});
     });

      //cкрытие burger-nav при нажатии на кнопку esc
    $(window).on('keyup',function(e){
        if(e.keyCode==27){
            $(".burger-nav").animate({
                'left': $(window).width() + 'px'
            }, 1000, function(){
                $('.burger').removeClass('active');
            });
        }
    })
    //cкрытие burger-nav при нажатии на элемент burger-nav
    $('.burger-nav').on('click',function(){ 
            $(".burger-nav").animate({
                'left': $(window).width() + 'px'
            }, 1000, function(){
                $('.burger').removeClass('active');
            });
    })


    //Плавный скролл
    $('.header_list a[href]').on('click', function(e) {
        e.preventDefault();  
        var attrLink= $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(attrLink).offset().top - 100+'px'
            }, 3000);
    });

    $('.burger-nav a[href]').on('click', function(e) {
        e.preventDefault();  
        var attrLink= $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(attrLink).offset().top - 100+'px'
            }, 3000);
    });

    // паралакс
let header = document.querySelector('.header');
let main = document.querySelector('.main');
window.addEventListener('scroll', function () {
    let top_main = main.getBoundingClientRect().top;
    if (top_main < -300) {
        header.classList.add('fixed');
    }
    if (top_main > -300) {
        header.classList.remove('fixed');
    }
});

});