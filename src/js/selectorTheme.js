import refs from "./refs";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const themeInLocal = localStorage.getItem("theme");

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

if (themeInLocal === Theme.DARK) {
  refs.bodyContainer.classList.add(Theme.DARK);
  refs.selector.checked = true;
}
