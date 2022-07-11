const header = document.getElementById("header");
const liS = document.querySelectorAll(".menu-elem");

header.addEventListener("click", () => {
  liS.forEach((li, index) => {
    setTimeout(() => {
      li.classList.toggle("hidden");
    }, index * 100);
  });
});

console.log(header);

setInterval(() => {
  header.classList.toggle("hideHeader");
}, 600);
