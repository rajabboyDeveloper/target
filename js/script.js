$(".slid").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  animateOut: "fadeOut",
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  animateOut: "fadeOut",
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});
