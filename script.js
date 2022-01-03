let toggle = document.querySelector(".toggle");
let navMenu = document.querySelector(".header ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu");
  navMenu.style.cssText = `opacity:1;`
});
