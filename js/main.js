$(function(){
  $('.bike-slider, .slider__items').slick({
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  });

  // Плавный скролл к якорю
  $(".menu__list, .bike__column").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});