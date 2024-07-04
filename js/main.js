document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    navigation: {
      nextEl: ".reviews_arrow--next",
      prevEl: ".reviews_arrow--prev",
    },
  });
});
