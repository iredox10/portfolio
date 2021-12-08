const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

menu.addEventListener('click', ()=>{
    nav.classList.toggle('toggle-nav')
    menu.classList.toggle('open')
})

console.log(menu);