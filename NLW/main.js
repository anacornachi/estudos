const toogle = document.querySelector('.toogle');
const menu = document.querySelector('.menu');
const navItem = document.querySelectorAll('.nav-item');
const html = document.querySelector('html');

  toogle.addEventListener('click', function() {
    if (toogle.classList.contains("show")) {
      toogle.classList.remove("show")
      menu.classList.remove("show")
      html.classList.remove("show")
      return
    }
    toogle.classList.add('show')
    menu.classList.add('show')
    html.classList.add('show')
  })

  navItem.forEach(function(item) {
    item.onclick = function() {
      html.classList.remove("show")
      toogle.classList.remove("show")
      menu.classList.remove("show")
    }
  });


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  loop: true
});
