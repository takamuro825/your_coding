$(function(){
  $('.js-menu__item__link').each(function(){
      $(this).on('click',function(){
          $("+.submenu",this).slideToggle();
          return false;
      });
  });
});


// ----------swiper---------------
var swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  centerdSlides : true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
      }
    },
      1000: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
  }

});









// -----------------------------------------------







// ----------AOS-------------
AOS.init();


// ------------form------------------

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

// お問合せ完了メッセージ

$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd6RBS5Sxk-pX_kzSG_z_uKrWEzdl807Xm2_NyV5TPqYBc_cw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact-btn-form").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
// -----------humburger-------
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();
