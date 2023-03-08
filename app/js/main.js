$(function(){
    //promoBtn color
   const promoBtn = document.querySelectorAll('.promo__btn');

   promoBtn.forEach((btn) => {
        btn.addEventListener('mouseover', () => {
            btn.classList.add('black-btn');
            btn.previousElementSibling.classList.remove('black-btn');
        })

   })

   //review slider
   const slider = document.querySelector('.review__items'),
         slides = document.querySelectorAll('.review__item'),
         prev = document.querySelector('.slider__navigation-btn.prev'),
         next = document.querySelector('.slider__navigation-btn.next'),
         sliderWrapper = document.querySelector('.review__slider'),
         width = window.getComputedStyle(sliderWrapper).width;


   let slideIndex = 1;
   let offset = 0;

   //стили
   slider.style.width = 100 * slides.length + '%'; 
   slider.style.display = 'flex';
   slider.style.transition = '0.5s all';
   sliderWrapper.style.overflow = 'hidden';

   slides.forEach((slide) => {
    slide.style.width = width; //т.е. теперь у всех слайдов одинаковая ширина 

   })

   next.addEventListener('click', () => {
      if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) { //т.е. долистали до конца
        offset = 0;
      } else {
        offset += +width.slice(0, width.length - 2);
      }

      slider.style.transform = `translateX(-${offset}px)`;
   });

   prev.addEventListener('click', () => {
    if(offset == 0) { //т.е. долистали до начала
      offset = +width.slice(0, width.length - 2) * (slides.length - 1)
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slider.style.transform = `translateX(${offset}px)`;
 });


});