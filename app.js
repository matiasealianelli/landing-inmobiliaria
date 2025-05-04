let btnMenu = document.querySelector(".icon-menu");
let btnCloseMenu = document.querySelector(".icon-close");
let nav = document.querySelector("nav");
let linkNav = document.querySelector(".link-header");
let conteinerCtaHero = document.querySelector(".conteiner-btns-cta");
let conteinerRedesHero = document.querySelector(".conteiner-redes-hero");

btnMenu.addEventListener("click", function clickMenu() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    nav.style.display = "flex";
    btnCloseMenu.style.display = "block";
    btnMenu.style.display = "none";
  }
});
btnCloseMenu.addEventListener("click", function clickMenu() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    nav.style.display = "none";
    btnCloseMenu.style.display = "none";
    btnMenu.style.display = "block";
  }
});
document.querySelectorAll("nav a").forEach((linkNav) => {
  linkNav.addEventListener("click", function clickLink() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      nav.style.display = "none";
      btnCloseMenu.style.display = "none";
      btnMenu.style.display = "block";
    }
  });
});

function moveConteiner() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    conteinerCtaHero.appendChild(conteinerRedesHero)
  }
}
moveConteiner();

window.addEventListener("scroll", () => {
  let valueInitHeader = 0;
  let heightScroll = document.documentElement.scrollTop;
  if (heightScroll === valueInitHeader) {
    document.querySelector("header").style.backgroundColor="transparent"
  } else if (heightScroll > valueInitHeader) {
    document.querySelector("header").style.backgroundColor = "#223d74"
    document.querySelector("header").style.transition = "all 0.3s ease";
  }
  else if (heightScroll < valueInitHeader) {
    document.querySelector("header").style.backgroundColor = "transparent"
  }
})