import cards from "./menu.json";
import refs from "./js/refs";
import templateByArray from "./templates/menu-card.hbs";

const menuCards = templateByArray(cards);
refs.menuContainer.insertAdjacentHTML("afterbegin", menuCards);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.selector.addEventListener("click", switchTemes);
refs.selector.addEventListener("click", setLocalStorage);

function switchTemes(e) {
  refs.bodyContainer.classList.toggle(Theme.LIGHT);
  refs.bodyContainer.classList.toggle(Theme.DARK);
}

function setLocalStorage(evt) {
  if (refs.selector.checked) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem("theme");

if (themeInLocal === Theme.DARK) {
  refs.bodyContainer.classList.add(Theme.DARK);
  refs.selector.checked = true;
}
