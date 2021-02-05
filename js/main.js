$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 6
      },
    }
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
    var elem = document.getElementsByClassName('swiper-button-next');
    elem[0].click();
    }
    if (event.code == 'ArrowLeft') {
      var elem = document.getElementsByClassName('swiper-button-prev');
    elem[0].click();
    }
  });

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });

  });

});

function show (name) {
	var elem = document.getElementById(name)
	if (elem)
    if (elem.style.display == "block") {
      elem.style.display = "none"
    }
    else {
      elem.style.display = "block"  
    }
  
}