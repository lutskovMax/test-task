$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
      {
        items: 1,
          dotsEach: true,
          autoplay: true,
          smartSpeed: 900,
          rewind: true,
          autoplayHoverPause:true,
            loop: true,
          responsiveClass: true,
          responsive: {

            0:{
                items: 1,
                nav: true
            },
              860:{
                items: 1,
                  nav:false
              },

              1200:{
                items:1,
                  nav:true,
                  loop: false
              }


          }

      }

  );


$('select').niceSelect();

    $('.header__burger').click(function (){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock');
    });



    $('.sliding__title').click(function() {
	let currentSlidingItem = $(this).closest('.nav-footer__block-list');
  let currentSlidinTitle = currentSlidingItem.find('.sliding__title');
  let currentSlidingContent = currentSlidingItem.find('.nav-footer__block-list-list');

  $('.nav-footer__block-list').not(currentSlidingItem).each(function()  {
  	let slidingContent = $(this).find('.nav-footer__block-list-list');
  	let slidingTitle = $(this).find('.sliding__title');
    if (slidingContent.hasClass('open')) {
    	slidingContent.slideToggle(300).toggleClass('open');
    	slidingTitle.toggleClass('open');
		}
  });

	currentSlidingContent.slideToggle(500).toggleClass('open');
  currentSlidinTitle.toggleClass('open');
});


});