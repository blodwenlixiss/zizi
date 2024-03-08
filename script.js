"use strict";

const text = document.querySelector(".asking");
const buttons = document.querySelector(".buttons");
const giff = document.querySelector(".giff");
const button = document.getElementById("noBtn");
const mainContainer = document.querySelector(".main-container");
const mainContainerWrapper = mainContainer.getBoundingClientRect();
const buttonWrapper = button.getBoundingClientRect();
const yesButton = document.getElementById("yesBtn");
button.addEventListener("mouseover", () => {
  const i =
    Math.floor(
      Math.random() * (mainContainerWrapper.width - buttonWrapper.width)
    ) + 1;
  const j =
    Math.floor(
      Math.random() * (mainContainerWrapper.height - buttonWrapper.height)
    ) + 1;
  button.style.left = i + "px";
  button.style.top = j + "px";
});

yesButton.addEventListener("click", () => {
  buttons.innerHTML = ``;
  text.innerHTML = `<h1>Waiting for you LAMASO <3</h1>
                    <span>დროზე შევთანხმდეთ მერე ;)</span>`;
  giff.innerHTML = `<img src="https://media.tenor.com/hA4lvEGfDlcAAAAi/%E3%83%8F%E3%82%B0-%E4%BB%B2%E8%89%AF%E3%81%97.gif" alt="giff" />`;
});
