$(function(){
  $('.difference__open-btn').on('click', function () { 
    $('.difference__wrapper').removeClass('difference__wrapper-hidden');
    $(this).removeClass('difference__btn');
  });
});

const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      //  reverseDirection: true,
    },
    loop: true,
    speed: 10000,
    slidesPerView: 'auto',
    spaceBetween: 30,
});