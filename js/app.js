/* =============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* =============== REMOVE MENU MOBILE ===============*/
const removeMenu = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

removeMenu.forEach((item) => item.addEventListener("click", linkAction));

/* =============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute("id");

//     const link = document.querySelector(`.nav__menu li a[href*=${sectionId}]`);

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       link.classList.add("active-link");
//     } else {
//       link.classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

/* =============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/* =============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.querySelector(".scrollup__icon");
  if (window.scrollY >= 1000) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);
