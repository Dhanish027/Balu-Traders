/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000, // Use a comma, not a semicolon
    disableOnInteraction: false,
  },
  slidesPerView: 3, // Display 3 suppliers per view
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
