'use strict'

let bodu = document.body
let burger = document.querySelector('.burger')
let burgerToggle = document.querySelector('.burger__toggle')
let linkBurger = document.getElementById('linkBurger')
let burgerlist = document.querySelector('.burger__list')

function burToggle() {
    burger.classList.remove('burger__toggle')
    console.log(burgerToggle)
}

linkBurger.addEventListener('mouseover', burToggle)
burgerlist.addEventListener('mouseover', burToggle)
burger.addEventListener('mouseover', burToggle)
burger.addEventListener('mouseout', function () {
    burger.classList.add('burger__toggle')
})
linkBurger.addEventListener('mouseout', function () {
    burger.classList.add('burger__toggle')
})

let logoText = document.querySelector('.logo__text')
if(logoText.innerText.length > 30){
    logoText.innerHTML = 'Enter max 30 sign '
    console.log('html - 16 line(max 30 sign)')
}
