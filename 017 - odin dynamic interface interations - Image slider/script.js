const pictures = document.querySelectorAll(".picture");
const nav = document.querySelector("#nav-dots p");

pictures.forEach((pic) => {
  pic.addEventListener("click", (ev) => {
    pictures.forEach((pic) => {
      pic.style = "order: 10; display: none";
      pic.classList.remove("prev", "next", "active");
    });

    const currID = pic.getAttribute("data-id");
    const prevIDelem = document.querySelector(`div[data-id='${findID("prev", currID)}']`);
    const nextIDelem = document.querySelector(`div[data-id='${findID("next", currID)}']`);

    pic.style = "order: 2; display: block";
    pic.classList.add("active");
    prevIDelem.style = "order: 1; display: block";
    prevIDelem.classList.add("prev");
    nextIDelem.style = "order: 3; display: block";
    nextIDelem.classList.add("next");

    swapNav(currID);
  });
});

function findID(which, current) {
  if (which === "prev") {
    if (current === "1") return 5;
    return (+current - 1).toString();
  }
  if (which === "next") {
    if (current === "5") return 1;
    return (+current + 1).toString();
  }
}

function swapNav(active) {
  let content = nav.innerText;

  let arr = ["👀", "👀", "👀", "👀", "👀"];
  arr[active - 1] = "💃";

  nav.innerText = arr.join(" ");
}
