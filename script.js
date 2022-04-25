import img1dark from 'url:./img/img1_dark.svg';
import img2dark from 'url:./img/img2_dark.svg';
import img3dark from 'url:./img/img3_dark.svg';
import img1light from 'url:./img/img1_light.svg';
import img2light from 'url:./img/img2_light.svg';
import img3light from 'url:./img/img3_light.svg';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const toggler = function (isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  image1.src = isDark ? img1dark : img1light;
  image2.src = isDark ? img2dark : img2light;
  image3.src = isDark ? img3dark : img3light;
};

const switchTheme = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggler(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggler(false);
  }
};

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggler(true);
  }
}
