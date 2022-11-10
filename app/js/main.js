$(function(){

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