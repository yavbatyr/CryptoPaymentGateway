$(function(){
  $('.difference__open-btn').on('click', function () { 
    $('.difference__wrapper').removeClass('difference__wrapper-hidden');
    $(this).removeClass('difference__btn');
  });
  $('.assurance__content-btn').on('click', function(){
    $('.assurance__content-dropdown-list').toggleClass('assurance__content-dropdown-list_active');
  });
});

const dropDown = document.querySelector('.assurance__content-btn');

dropDown.addEventListener('click', (e) => {
  e.preventDefault();
  dropDown.nextElementSibling.classList.toggle('assurance__content-btn_active')
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