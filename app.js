const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('hamburger-active')
 navList.classList.toggle('nav-list-active')
})


const scrollFloat = (element, animIn, animOut, delay) => {
 const width = window.innerWidth
 const isMobile = width <= 768 ? true : false
 const els = document.querySelectorAll(`.${element}`)
 els.forEach(el => {
  const y = el.getBoundingClientRect().top
  const winY = window.innerHeight - 50
  const isVisible = y < winY ? true : null
  el.style.animation = isVisible ? isMobile ? (animIn == "width-to-full") ? "width-to-full-mob .8s ease-out forwards" : `${animIn} .8s ease-out forwards` : `${animIn} 1s ease-out forwards` : `${animOut} 1s ease-out forwards`
  el.style.animationDelay = isVisible ? isMobile ? '.3s' : `${delay}`: null
 })
}
document.addEventListener("scroll" , () => {
 scrollFloat("provide-right h1", "float", "sink", ".5s")
 scrollFloat("provide-left", "float", "sink", ".5s")
 scrollFloat("gallery-item img", "width-to-full", "width-to-zero", ".5s")
 scrollFloat("gallery-item h1", "float", "sink", ".7s")
 scrollFloat("gallery-item p", "float", "sink", ".7s")
 scrollFloat("process-left h1", "float", "sink", ".5s")
 scrollFloat("process-left p", "float", "sink", ".6s")
 scrollFloat("process-left button", "float", "sink", ".7s")
 scrollFloat("process-right .right-container h1", "float", "sink", ".5s")
 scrollFloat("process-right .right-container p", "float", "sink", ".6s")
 scrollFloat("process-container .mobile-btn", "float", "sink", ".5s")
 scrollFloat("creative-right p", "float", "sink", ".5s")
 scrollFloat("creative-left h1", "float", "sink", ".5s")
 scrollFloat("collab", "height-to-width", "height-to-width-reverse", ".5s")
})
document.addEventListener("DOMContentLoaded" , () => {
 scrollFloat("provide-right h1", "float", "sink", ".5s")
 scrollFloat("provide-left", "float", "sink", ".5s")
 scrollFloat("gallery-item img", "width-to-full", "width-to-zero", ".5s")
 scrollFloat("gallery-item h1", "float", "sink", ".7s")
 scrollFloat("gallery-item p", "float", "sink", ".7s")
 scrollFloat("process-left h1", "float", "sink", ".5s")
 scrollFloat("process-left p", "float", "sink", ".6s")
 scrollFloat("process-left button", "float", "sink", ".7s")
 scrollFloat("process-right .right-container h1", "float", "sink", ".5s")
 scrollFloat("process-right .right-container p", "float", "sink", ".6s")
 scrollFloat("process-container .mobile-btn", "float", "sink", ".5s")
 scrollFloat("creative-right p", "float", "sink", ".5s")
 scrollFloat("creative-left h1", "float", "sink", ".5s")
 scrollFloat("collab", "height-to-width", "height-to-width-reverse", ".5s")
})