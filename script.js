function initAnimaScroll() {
  const articles = document.querySelectorAll('[data-tab="content"] article');

  function animaScroll() {
    articles.forEach((article) => {
      const position = article.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        article.classList.add("active", article.dataset.anime);
      }
    });
  }

  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimaScroll();

function initFav() {
  const favIcons = document.querySelectorAll('[data-tab="content"] i');
  favIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("fas");
    });
  });
}
initFav();

function initDarkMode() {
  const themeIcon = document.querySelector(".header__nav i");
  themeIcon.addEventListener("click", () => {
    if (document.body.dataset.theme === "light") {
      document.body.dataset.theme = "dark";
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      document.body.dataset.theme = "light";
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  });
}
initDarkMode();
