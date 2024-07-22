document.addEventListener("DOMContentLoaded" , function () {
    setTimeout(function () {
        let overlay = document.getElementById("overlay")
        overlay.style.display = "none"
    }, 1000)
})


let menu = document.getElementById("menu")
let list = document.getElementById("ul")
let close = document.getElementById("close")

menu.addEventListener("click" , function () {
    list.classList.remove("hidden")
    this.style.display = 'none'
})


close.addEventListener("click" , function () {
    list.classList.add("hidden")
   menu.style.display = "block"
})


let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target && window.innerWidth <= 768) {
          list.classList.add("hidden")
          menu.style.display = "block"
            let targetPosition = target.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target && window.innerWidth >= 769) {
            let targetPosition = target.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});




// swiper
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 0,
  autoplay: {
      delay: 3000,
      disableOnInteraction:false,
    },
      // Responsive breakpoints
breakpoints: {
  // when window width is >= 640px
  640: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  // when window width is >= 768px
 768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 640px
  1024: {
    slidesPerView: 3,
    spaceBetween: 20
  }
},
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  clickable:true,
  },
  // grabCursor:true,
})


  // scrollReveal
  const sr = ScrollReveal({
    origin: "bottom",
    distance: '60px',
    duration: 3000,
    delay: 600,
});

// hero
sr.reveal('.hero__text' , { origin: 'top' });

  //  steps
  sr.reveal(".steps__step" , {distance:"100px" , interval:100})


  // about
  sr.reveal(".about__text" , { origin: 'left' })
  sr.reveal(".about__img" , { origin: 'right' })
  sr.reveal(".abouto__img" , { origin: 'left'  })

  // testmonials
  sr.reveal(".testimonial__title" , {  origin:"top" })
 
