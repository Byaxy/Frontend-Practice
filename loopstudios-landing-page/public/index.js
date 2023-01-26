const mobileMenu = document.querySelector("#mobile-menu");
const open = document.getElementById("open");
const close = document.getElementById("close");

console.log(mobileMenu);
console.log(open);
console.log(close);

open.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("visible");
});

close.addEventListener("click", function () {
  mobileMenu.classList.remove("visible");
  mobileMenu.classList.add("hidden");
});
