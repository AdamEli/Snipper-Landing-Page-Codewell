const dropdown_btn = document.querySelector(".dropdown-btn");
const dropdown_x_btn = document.querySelector(".dropdown-x-btn");
const expanded_nav = document.querySelector(".expanded-nav");

dropdown_btn.addEventListener("click", () => {
    expanded_nav.classList.toggle("expanded-nav__open");
});
dropdown_x_btn.addEventListener("click", () => {
    expanded_nav.classList.toggle("expanded-nav__open");
});
