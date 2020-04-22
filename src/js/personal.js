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

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});

//табы в настройках профиля
$(document).on('click', '.tabs-menu__link', function () {
  $('.tabs-menu__link').removeClass('is-active');
  $(this).addClass('is-active');
  $('.tab').removeClass('is-active');
  $('.tab[data-target=' + $(this).attr('data-link') + ']').addClass('is-active');
  return false;
});

$(document).ready(function () {
  //кастомный селект
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });

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

//кастомный загрузчик файлов
var inputs = document.querySelectorAll( '.js-upload-file' );
Array.prototype.forEach.call( inputs, function( input ) {
	var label	= input.nextElementSibling,
		  labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e ) {
    var fileName = '';
		if( this.files && this.files.length > 1 ) {
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		} else {
			fileName = e.target.value.split( '\\' ).pop();
    }

		if( fileName ) {
			label.innerHTML = fileName;
		} else {
			label.innerHTML = labelVal;
    }
	});
});
