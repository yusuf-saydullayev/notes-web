$(window).load(function () {
  $("#preloader").fadeOut("slow");
});

$(document).ready(function () {
  wow = new WOW({
    mobile: false,
  });
  wow.init();

  $("#top-nav").onePageNav({
    currentClass: "current",
    changeHash: true,
    scrollSpeed: 1200,
  });

  //animated header class
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".navbar-default").addClass("animated");
    } else {
      $(".navbar-default").removeClass("animated");
    }
  });

  $("#countdown_dashboard").countDown({
    targetDate: {
      day: 11,
      month: 3,
      year: 2017,
      hour: 00,
      min: 00,
      sec: 01,
    },
    omitWeeks: true,
  });

  $(".init-slider").owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    video: true,
    smartSpeed: 600,
  });

});
