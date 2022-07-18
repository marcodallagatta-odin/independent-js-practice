"use strict";

async function populate() {
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  function populateHeader(json) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = json.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${json.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

  function populateHeroes(json) {}

  let p = document.createElement("p");
  p.innerText = superHeroes;
  document.appendChild(p);

  populateHeader(superHeroes);
  // populateHeroes(superHeroes):
}
