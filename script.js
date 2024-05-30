function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Copyright Year
currentYear = document.getElementById('currentYear')
console.log(currentYear)
const date = new Date();
currentYear.innerHTML = date.getFullYear()