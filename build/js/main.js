function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

var targetElement = document.querySelector(".menu-block__inner");

$(document).ready(function() {
  //открытие/закрытие главного меню
  $(".js-menu-toggler").click(function() {
    $(this).toggleClass("is-active");
    $(".menu-block").toggleClass("is-open");
    $(".menu-block__inner").toggleClass("is-open");
    if($(this).hasClass('is-active')) {
      bodyScrollLock.disableBodyScroll(targetElement);
    } else {
      bodyScrollLock.enableBodyScroll(targetElement);
    }
    return false;
  });

  // дропдаун у главного меню
  if(isTouchDevice()===true) {
    $('.root-link').click(function(){
      if(!$(this).parent().hasClass('is-hover')){
        var sub = $(this).next('.main-menu__dropdown');
        if(sub.is(':visible')){
          $('.main-menu__dropdown').removeClass('open');
          return true;
        } else {
          $('.main-menu__dropdown').removeClass('open');
          sub.addClass('open');
          return false;
        }
      }
    });
  } else {
    $('.root').hover(
      function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeIn(200);
      }, function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeOut(200);
      }
    );
  }

  //аккордеон
  $('.js-accordion-title').click(function() {
    $(this).toggleClass('is-active');
    $('.accordion__body[data-target=' + $(this).attr('data-link') + ']').slideToggle();
    return false;
  });

  if($('body').width() < 768) {
    //слайдер корпусов
    if($('.js-list-1').length) {
      $('.js-list-1').on('init', function(event, slick) {
        var list = $('.js-list-1').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });

      $('.js-list-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true
      });
    }

    //слайдер конфигураций
    if($('.js-list-3').length) {
      $('.js-list-3').on('init', function(event, slick) {
        var list = $('.js-list-3').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });

      $('.js-list-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true
      });
    }

    //слайдер дизайна
    if($('.js-list-5').length) {
      $('.js-list-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
        mobileFirst: true
      });
    }
  }

  //слайдер игр
  if($('.js-list-2').length) {
    $('.js-list-2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
      ]
    });
  }
});

//переключение игр в списке
$(document).on('click', '.js-game', function () {
  $('.js-game').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
})
