// const btn = document.getElementById(".burger");
// document.querySelector(".burger").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("show"));

const btnWrap = document.querySelector(".btn-wrap");
const sideBar = document.querySelector(".sidebar");

btnWrap.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
});