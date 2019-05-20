    $('.hamburger').click(function(){
      $('.hamburger').toggleClass('is-active');
      $('.menu').toggleClass('show');
      $('body').toggleClass('overflow-h');
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $('.header-home').addClass('squeeze');
        $('.home__bottom-bar').addClass('slide-out');
      } else {
        $('.header-home').removeClass('squeeze');
        $('.home__bottom-bar').removeClass('slide-out');
      }
    });
    (function () {

      var dotsCount = 1;

      function getDotsSlick() {

      }
})();
