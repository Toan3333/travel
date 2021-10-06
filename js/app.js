let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".heading-navigation");

// Xử lý khi click navbar trên mobile
menu.addEventListener('click', function(){
    navbar.classList.toggle('active')
});

// Xử lý video ẩn hiện
function hien() {
    var trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
}

// Xử lý khi click vào navigation active
function navigationList(element) {
    var tabs = document.getElementsByClassName('item');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.color ='#1d3271';
    }
    element.style.color = '#ff5e14';
}

$(".search").click(function(){
  $(".search-box").show();
});

$(".btn-danger").click(function(){
  $(".search-box").hide(200);
});

$(window).on('load', function(event){
  $('body').removeClass('pre-loading');
  $('.load').delay(1000).fadeOut();
});


// Xử lý slider

var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

  var swiper = new Swiper(".brand-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

var swiper = new Swiper(".package-slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});