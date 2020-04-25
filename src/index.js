import items from './menu.json';
import menuItem from './template.hbs';
import './styles.css';

const menuItemPosition = document.querySelector('.js-menu');

buildMenuItem(items);
function buildMenuItem(items) {
  const markup = items.map(item => menuItem(item)).join('');
  menuItemPosition.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const inputTheme = document.querySelector('.js-switch-input');
const currentDarkTheme = localStorage.getItem('themeD');
const currentLightTheme = localStorage.getItem('themeL');

inputTheme.addEventListener('change', newTheme);

function newTheme() {
  if (inputTheme.checked) {
    newDarkTheme();
  } else {
    newLightTheme();
  }
}

if (currentDarkTheme) {
  newDarkTheme();
  inputTheme.checked = true;
} else if (currentLightTheme) {
  newLightTheme();
}

function newDarkTheme() {
  localStorage.setItem('themeD', JSON.stringify(Theme.DARK));
  localStorage.removeItem('themeL');
  if (document.body.classList.contains('light-theme') === true) {
    document.body.classList.replace('light-theme', 'dark-theme');
  } else if (document.body.classList.contains('dark-theme') === false) {
    document.body.classList.add('dark-theme');
  }
}

function newLightTheme() {
  localStorage.setItem('themeL', JSON.stringify(Theme.LIGHT));
  localStorage.removeItem('themeD');
  if (document.body.classList.contains('dark-theme') === true) {
    document.body.classList.replace('dark-theme', 'light-theme');
  } else if (document.body.classList.contains('light-theme') === false) {
    document.body.classList.add('light-theme');
  }
}
