const sectionsubheaderEl = document.querySelector(".box-sub-header");
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting === false) {
      document.querySelector(".header").classList.add("stickly");
    }
    if (entry.isIntersecting) {
      document.querySelector(".header").classList.remove("stickly");
    }
  },
  {
    root: null,
    threshold: 0,
    margin: "-10px",
  }
);
obs.observe(sectionsubheaderEl);
// Slick slider
$(document).ready(function () {
  $(".gallery").slick({
    // dots: true,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".logos").slick({
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
$(document).ready(function () {
  $(".box-img").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
