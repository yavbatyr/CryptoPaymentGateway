$(function(){

});

const swiper1 = new Swiper('.swiper', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      
    },
    minimumVelocity: 1,
    momentumVelocityRatio: 2,
    momentum: true,
    loop: true,
    speed: 10000,
    slidesPerView: 'auto',
    spaceBetween: 30,
});
const swiper2 = new Swiper('.swiper-bottom ', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
      momentum: true,
    },
    loop: true,
    speed: 10000,
    slidesPerView: 'auto',
    spaceBetween: 30,
});