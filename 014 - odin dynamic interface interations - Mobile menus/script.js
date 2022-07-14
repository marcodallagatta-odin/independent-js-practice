// ==UserScript==
// @name         CoiledFist better gallery
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.coiledfist.org/gallery/*
// @icon         https://icons.duckduckgo.com/ip2/coiledfist.org.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const pictures = document.getElementById("galleryImage");

  if (pictures.src.includes("sized.jpg")) {
    pictures.style = "outline:10px dashed red";
  }

  if (pictures.getAttribute("width") > window.innerWidth) {
    pictures.removeAttribute("height");
    pictures.setAttribute(
      "width",
      window.innerWidth - (window.innerWidth * 3) / 100
    );
    window.addEventListener("resize", function (event) {
      pictures.setAttribute(
        "width",
        window.innerWidth - (window.innerWidth * 2) / 100
      );
    });
  }

  const menu = document.querySelector(
    ".navtableborderend > .modnavbox > tbody > tr > td:nth-child(3)"
  );
  menu.style = "display:none";
})();
