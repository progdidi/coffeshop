$(function(){
   const promoBtn = document.querySelectorAll('.promo__btn');

   promoBtn.forEach((btn) => {
        btn.addEventListener('mouseover', () => {
            btn.classList.add('black-btn');
            btn.previousElementSibling.classList.remove('black-btn');
        })

   })
});