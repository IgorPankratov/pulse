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
        breakpoint: 992, // интервал на котором работают правила. От 0 до 991 px
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  // $('.catalog-item__link').each(function(i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // })

  // $('.catalog-item__back').each(function(i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // })

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  // Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  // Validation

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!"),
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  // Добавили маску ввода телефона
  $("input[name=phone]").mask("+7(999) 999-99-99");

  $("form").submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });
  //  Smooth scroll and pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href='up']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  // Плагин для анимации
  new WOW().init();
});
