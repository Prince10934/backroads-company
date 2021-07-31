const toggleBtn = document.getElementById("toggle-btn");
const navbar = document.querySelector(".navbar");

const outerContainer = document.querySelector(".navbar-links-container");
const innerContainer = document.querySelector(".navbar-links");
toggleBtn.addEventListener("click", () => {
  const height = outerContainer.getBoundingClientRect().height;
  if (height === 0) {
    const newHeight = innerContainer.getBoundingClientRect().height;
    outerContainer.style.height = newHeight + "px";
  } else {
    outerContainer.style.height = 0;
  }
});
const links = document.querySelectorAll(".scroll-link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    outerContainer.style.height = 0;
    const newHeight = innerContainer.getBoundingClientRect().height;
    const id = link.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const height = navbar.getBoundingClientRect().height;
    let value = 0;
    if (window.innerWidth < 992) {
      value = element.offsetTop - height + newHeight;
    } else {
      value = element.offsetTop - height;
    }
    window.scrollTo({
      lett: 0,
      top: value,
      behavior: "smooth",
    });
  });
});
