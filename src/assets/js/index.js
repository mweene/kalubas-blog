"use strict";

document.getElementById("menu").addEventListener("click", (event) => {
  const navList = document.querySelector(".nav__list");
  event.srcElement.innerText =
    event.srcElement.innerText === "menu" ? "close" : "menu";

  navList.classList.toggle("reveal");
});
