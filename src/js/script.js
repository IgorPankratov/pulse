//Slick-slider
$(document).ready(function () {
  $(".carousel__inner").slick({
//     // infinite: true, /* карусель двигается бесконечно*/
//     // slidesToShow: 2, /* сколько слайдов будем показывать*/
//     // slidesToScroll: 3 /* сколько слайдов перелистываем за одно нажатие */
//     // dots: true, // кружочки под слайдером
    speed: 1500, // скорость переключения слайда
    adaptiveHeight: true, // подстраиваем высоту
//     // autoplay: true, // автопереключение
//     // autoplaySpeed: 2000, // частота переключения
//     // fade: true, // фэйд эффект (слайд проявляется)
//     // cssEase: "linear", // каким образом слайд проявляется
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/slider/chevron_left_solid.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/slider/chevron_right_solid.png"/></button>',
    responsive: [
      {
        breakpoint: 992, // интервал на котором работают правила. От 0 до 992 px
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});