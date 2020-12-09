const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('hamburger-active')
 navList.classList.toggle('nav-list-active')
})