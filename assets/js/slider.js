const calculateSlidesPerView = (size) => {
   let slideWidth = size; // Replace with your slide width
  const box = document.querySelector(".carousel")
  const containerWidth = box.clientWidth;
  return (containerWidth / slideWidth);
};
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
console.log(prevButton)
const swiper = new Swiper('#blog-footer', {
  slidesPerView: calculateSlidesPerView(124),

  spaceBetween: 16,
  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  on: {
    slideChange: function () {
      if (swiper.isEnd) {
        nextButton.style.opacity = '0.25';
      } else {
        nextButton.style.opacity = '1';
      }
      if (swiper.isBeginning) {
        prevButton.style.opacity = '0.25';
      } else {
        prevButton.style.opacity = '1';
      }
    },
  },
});


const swiper1 = new Swiper('#product-footer', {
  slidesPerView: calculateSlidesPerView(220),
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});


window.addEventListener('resize', () => {
  swiper.params.slidesPerView = calculateSlidesPerView(124);
  swiper1.params.slidesPerView = calculateSlidesPerView(220);
  swiper.update();
  swiper1.update();

});
