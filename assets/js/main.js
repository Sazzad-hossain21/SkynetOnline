// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // AOS JS
  AOS.init ({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})

  // Happy Section

  const happy_wrap = document.querySelector(".happy");
  const happy_numbers = document.querySelectorAll(".number");

  window.addEventListener("scroll", () => {
    countUp();
  })

  function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }

  function countUp() {
    if (!checkScroll(happy_wrap)) return;
    happy_numbers.forEach(numb => {
      const updateCount = () => {
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 500;
        const increment = Math.ceil(maxNum / speed);

        if(currentNum < maxNum) {
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 1)
        }
        else {
          numb.innerText = maxNum;
        }
      };

      setTimeout(updateCount, 400);
    })
  }

// Sticky

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 200) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");

  }
});

// Menu Bar

const menuBar = document.querySelector(".menubar");
const navBar = document.querySelector("header nav");
const links = document.querySelectorAll(".nav-links a");

function closeMenu(){
  navBar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

menuBar.addEventListener("click", () => {
  if(!navBar.classList.contains("open")){
    navBar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  }
  else{
    closeMenu();
  }
})

links.forEach((link) => link.addEventListener("click", () => closeMenu()));
