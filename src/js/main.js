//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()) {
    h.addClass("half-scrolled");
  } else {
    h.removeClass("half-scrolled");
  }

  if($(window).scrollTop() > (h.height() * 2)) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

//проверка на тач-устройства
function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

//элемент для bodyScrollLock
var targetElement = document.querySelector(".menu-block__inner");

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //дропдаун у главного меню
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

  //слайдер главного баннера
  if($('.js-main-banner').length) {
    $('.js-main-banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: true,
            prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
          }
        }
      ]
    });
  }

  //слайдер акций
  if($('.js-actions-slider').length) {
    $('.js-actions-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      mobileFirst: true
    });
  }


  //слайдер отзывов
  if($('.js-reviews-slider').length) {
    $('.js-reviews-slider').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие/закрытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
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

//блок геопозиции
$(document).on('click', '.js-location', function () {
  $('.header__location').toggleClass('is-active');
  return false;
});

$(document).on('focus', '.js-location-list', function () {
  $('.location__suggest').show();
});

$(document).on('blur', '.js-location-list', function () {
  $('.location__suggest').hide();
});

//переключение баннеров в .block-2
$(document).on('click', '.js-b2-nav', function () {
  $('.js-b2-nav').removeClass('is-active');
  $(this).addClass('is-active');
  $('.block-2__banner').removeClass('is-active');
  $('.block-2__banner[data-target='+ $(this).attr('data-target') +']').addClass('is-active');
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});

//переключение табов стандарт/vip
$(document).on('click', '.js-tab-changer', function () {
  var el = $(this);
  if(el.hasClass('button--transparent')){
    $('.js-tab-changer').addClass('button--transparent');
    el.removeClass('button--transparent');

    $('.configs-tab.is-active').animate({
      opacity: 0
    }, 400, function() {
      $('.configs-tab.is-active').removeClass('is-active');
      $('.configs-tab[data-target='+el.attr('data-target')+']').addClass('is-active').animate({
        opacity: 1
      }, 400);
    });
  }
  return false;
});

//faq togglers
$(document).on('click', '.js-faq-mobile-toggler', function () {
  var el = $(this);
  el.next('.faq__questions-block').slideToggle();
  el.toggleClass('is-active');
  return false;
});

$(document).on('click', '.js-faq-toggler', function () {
  var el = $(this);
  if(!el.hasClass('is-active')) {
    $('.js-faq-toggler').removeClass('is-active');
    el.addClass('is-active');
    $('.faq__section.is-active').slideToggle('300', function () {
      $('.faq__section.is-active').removeClass('is-active');
      $('.faq__section[data-target="'+el.attr('data-target')+'"]').slideToggle('300').addClass('is-active');
    });
  }
  return false;
});

$(document).on('click', '.js-question-toggler', function () {
  var el = $(this);
  el.find('.question__body').slideToggle();
  el.toggleClass('is-open');
  return false;
});

$(window).on("orientationchange", function(event) {
  $('.faq__questions-block, .faq__section').attr('style', '');
});
