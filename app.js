const stars = document.querySelector('#starts')
const moon = document.querySelector('#moon')
const behind = document.querySelector('#behind')
const front = document.querySelector('#front')
const text = document.querySelector('#text')

window.addEventListener('scroll',() => {
   const value = window.scrollY
   
   stars.style.left = value * .25 + 'px'
   moon.style.top = value * 1.05 + 'px'
   behind.style.top = value + .5 + 'px'
//    front.style.top = value + 0 + 'px'
   text.style.marginRight = value * 3 + 'px'
})