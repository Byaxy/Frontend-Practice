const accordian = document.getElementsByClassName("content");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
}
