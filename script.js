const card = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".cards-container");
const body = document.querySelector("body");
const btnClose = document.querySelector(".btn-close-contact");

const contact = document.querySelector(".contact-toggle");
const projects = document.querySelector(".projects-toggle");

projects.addEventListener("click", function () {
  document
    .querySelector(".cards-big-container")
    .classList.toggle("big-container-active");
});
contact.addEventListener("click", function () {
  document.querySelector(".contact").classList.toggle("contact-active");
});
btnClose.addEventListener("click", function () {
  document.querySelector(".contact").classList.add("contact-active");
});
card.forEach((item, i) => {
  item.addEventListener("mouseenter", function () {
    //console.log(item, i);
    document.querySelector(`.code-${i + 1}`).style.display = "block";
  });
});

card.forEach((item, i) => {
  item.addEventListener("mouseleave", function () {
    //console.log(item, i);
    document.querySelector(`.code-${i + 1}`).style.display = "none";
  });
});

let activeSlide = 0;

nextBtn.addEventListener("click", function () {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  goNext();
});
prevBtn.addEventListener("click", function () {
  if (activeSlide === 0) activeSlide = slides.length;
  activeSlide--;
  goNext();
});

const goNext = () => {
  slides.forEach((item) => {
    item.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
};
