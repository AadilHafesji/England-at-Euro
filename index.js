// Creating Cookies
Cookies.set('name', 'value', { expires: 7 });

function backToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

// Initialize Carousel
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween: 100,
  parallax: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Embedded Twitter Timeline
window.twttr = (function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t; // If ID is present the return object t
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function (f) {
    t._e.push(f); // Push the values
  };

  console.log(t);
  return t;
}(document, "script", "twitter-wjs"));
