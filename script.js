const init = () => {
  const hamburgerBtn = document.getElementsByClassName("hamburger-btn")[0];
  hamburgerBtn.addEventListener("click", handleClick);
  handleResize();
  window.addEventListener("resize", handleResize);
};

const handleResize = () => {
  const width = window.innerWidth;
  const body = document.getElementsByTagName("body")[0];
  width >= 900 ? (body.className = "large") : (body.className = "small");
};

const handleClick = () => {
  const hamburgerBtn = document.getElementsByClassName("hamburger-btn")[0];
  const hamburgerNav = document.getElementsByClassName("header-bottom")[0];

  if (hamburgerNav.classList[1] === "c") {
    hamburgerBtn.innerHTML = `<i class="fas fa-times"></i>`;
    hamburgerNav.classList.replace("c", "o");
  } else {
    hamburgerNav.classList.replace("o", "c");
    hamburgerBtn.innerHTML = `<i class="fas fa-bars"></i>`;
  }
};

init();
