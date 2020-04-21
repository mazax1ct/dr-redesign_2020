//открытие/закрытие меню конфигуратора
$(document).on('click', '.js-config-menu', function () {
  $('body').toggleClass('overflow');
  $(this).toggleClass("is-active");
  $(".personal-menu").toggleClass("is-open");
  return false;
});

//открытие/закрытие главного меню
$(document).on('click', '.js-main-menu', function () {
  $(this).toggleClass("is-active");
  $('.personal-menu').toggle();
  $(".main-menu").toggleClass("is-open");
  return false;
});

$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});


$(document).ready(function () {
  //сортировка в таблице
  $(".js-sort").addSortWidget();

 //запуск плавающего блока с ценой в детальном описании конфигурации
 if ($(".js-sticky-block").length) {
   var offTop;
   if($('body').width() >= 768 && $('body').width() < 992) {
     offTop = 150;
   }

   if($('body').width() > 992) {
     offTop = 193;
   }

   if ($("body").width() >= 768) {
     $(".js-sticky-block").trigger("sticky_kit:detach");
     setTimeout(function() {
       $(".js-sticky-block").stick_in_parent({
         parent: '.config-detail__right',
         offset_top: offTop
       });
     }, 100);
   }

   //если блок для контента пустой, открепляем плавающий блок
   if ($(".js-content-with-sticky").length) {
     if ($('.js-content-with-sticky').html().trim() === '') {
       $(".js-sticky-block").trigger("sticky_kit:detach");
     }
   }
 }
});
