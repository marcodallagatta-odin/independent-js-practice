const envelopeIcon = document.querySelector(".envelope");
const markerIcon = document.querySelector(".marker");
const homeIcon = document.querySelector(".home");
const searchIcon = document.querySelector(".search");
const userIcon = document.querySelector(".user");
const nav = document.querySelector(".nav");

homeIcon.addEventListener("click", (event) => {
  if (nav.classList.contains("nav-close")) {
    setTimeout(toggleIcons, 400);
  } else {
    toggleIcons();
  }
  nav.classList.toggle("nav-open");
  nav.classList.toggle("nav-close");
});

function toggleIcons() {
  envelopeIcon.classList.toggle("hidden");
  markerIcon.classList.toggle("hidden");
  searchIcon.classList.toggle("hidden");
  userIcon.classList.toggle("hidden");
}
