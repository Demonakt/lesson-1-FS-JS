'use strict'

const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150}
]

let btn = document.querySelector('.by-btn')
btn.addEventListener('click',btnClick)
function btnClick() {
    products.forEach(function (elem, i){
        document.body.insertAdjacentHTML('beforeend',`
        <div class='product-item'>
                 <h3>${products[i].title}</h3>
                 <p>${products[i].price}</p>
                 <button class="by-btn">Add</button>
             </div>
        `)
    })
    btn.removeEventListener('click',btnClick)
}

// let btn = document.querySelector('.by-btn')











// const renderProduct = (title, price) =>{
//     return `<div class='product-item'>
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="by-btn">Add</button>
//             </div>`
// }
