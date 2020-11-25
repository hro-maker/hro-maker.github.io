
$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1200,
            adaptiveHeight: true,
            autoplay: false,
            autoplaySpeed: 3000,
            prevArrow: '<button type="button" class="slick-prev"><img src="../img/karusel/left.png" alt="left"></img> </button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../img/karusel/right.png" alt="left"></img</button>'
          }
    );
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
  
    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click',function (e) {
          e.preventDefault();
          $('.catalog-item__content ').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
  
      });
      
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    //modal
    $('[data-modal=consutation]').on('click',function (){
        $('.overlay, #consultation').fadeIn('slow');

    });
    $('.modal__close').on('click',function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    // $('.button_mini').on('click',function(){
    //   $('.overlay, #order').fadeIn('slow');
    // });
    $('.button_mini').each(function(i){
      $(this).on('click',function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });
   
    
  function validateForm(form){
    $(form).validate(
      {
        rules:{
          name: {
            required:true,
            minlength: 4
          },
          phon: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "We need your email address to contact you",
            minlength: jQuery.validator.format("At least {0} characters required!")
          },
          phon: "enter your phon",
          email: {
            required: "We need your email address to contact you",
            email: "greq jisht mail"
          }
        }
      }
    );
  };
  validateForm('#consultation form');
  validateForm('#order form');
  validateForm('#consultation-form');

  $('input[name=phon]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");

      $('form').trigger('reset');
    });
    return false;
  });
  $(window).scroll(function(){
    if($(this).scrollTop()>1600){
      $('.pageup').fadeIn();
    }else{
      $('.pageup').fadeOut();
    }
  });
  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
  new WOW().init();
});
