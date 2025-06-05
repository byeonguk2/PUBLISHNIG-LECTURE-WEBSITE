$(function () {
  /* Include Files */
  $(() => {
    $(".header-include").load("/include/header.html", () => {
      /* Mega Navigation */
      $(".trigger").click(() => {
        $(".mega-navi").stop().slideToggle();
      });

      $("section").click(() => {
        $(".mega-navi").stop().slideUp();
      });
    });

    $(".footer-include").load("/include/footer.html");
  });

  /* Scroll Header Fixed */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  /* Focus Class */
  $(".like").click(function () {
    $(this).toggleClass("active");
  });

  /* Front Slider */
  $(".front-slider-items").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    speed: 300,
    pauseOnHover: true,
  });

  /* The Final Countdown */
  $("#eraly-bird-countdown").countdown("2025/07/05", function (event) {
    $(this).html(
      event.strftime(
        "<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음"
      )
    );
  });

  /* Focus Class Slider */
  $(".focus-class-items").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
  });
});
