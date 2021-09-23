'use strict';
//
// class ProductsList {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         this.goodsObject = [];
//
//         this.fetchGoods();
//         this.render();
//     }
//
//     fetchGoods() {
//         this.goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ]
//     }
//
//     render() {
//         const block = document.querySelector(this.container);
//
//         for (const product of this.goods) {
//             const productObject = new ProductItem(product)
//             this.goodsObject.push(productObject);
//
//             block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
//         }
//     }
// }
//
// class ProductItem {
//     constructor(item, img='https://via.placeholder.com/200x150') {
//         this.id = item.id;
//         this.title = item.title;
//         this.price = item.price;
//         this.img = img;
//     }
//
//     getHTMLString(){
//         return `<div class="product-item" data-id="${this.id}">
//         <img src="${this.img}" alt="some img">
// <div class="desc">
// <h3>${this.title}</h3>
// <p>${this.price} \u20bd</p>
// <button class="buy-btn">Купить</button>
// </div>
// </div>`
//     }
// }
//
// const catalog = new ProductsList();

// =====================================================================================================\\
//
// let products = document.querySelector('.products')
// let items = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// for(let x of items){
//     products.insertAdjacentHTML('beforebegin',`
//     <div class="product-item" data-id="${this.id}">
//         <img src="https://via.placeholder.com/200x150" alt="some img">
//         <div class="desc">
//         <h3>${x.title}</h3>
//         <p>${x.price} \u20bd</p>
//         <button class="buy-btn">Купить</button>
//         </div>
//     </div>`
//     )
//     console.log(x.id);
// }

//============================================================================================================\\

//
//
// class GetProduct {
//
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         this.goodsObject = [];
//
//         this.render();
//         this.productItem();
//         this.totalProduct()
//     }
//
//     render() {
//         this.goods = [
//             {id: 1, title: 'Notebook', price: 20000},
//             {id: 2, title: 'Mouse', price: 1500},
//             {id: 3, title: 'Keyboard', price: 5000},
//             {id: 4, title: 'Gamepad', price: 4500},
//         ]
//     }
//
//     productItem() {
//         const block = document.querySelector(this.container);
//
//         for (const product of this.goods) {
//             const productObject = new SetProduct(product)
//             this.goodsObject.push(productObject)
//
//             block.insertAdjacentHTML('beforebegin', productObject.fetchGoods())
//         }
//     }
//
//     totalProduct() {
//         let sumProducts = [];
//         for (const product of this.goods) {
//             sumProducts.push(product.price);
//         }
//         const total = sumProducts.reduce(sum);
//                 function sum(total, value) {
//             return total + value;
//         }
//         console.log(total)
//     }
//
// }
//
// class SetProduct {
//     constructor(item, img='https://via.placeholder.com/200x150'){
//         this.id = item.id;
//         this.price = item.price;
//         this.title = item.title;
//         this.img = img;
//     }
//     fetchGoods(){
//         return `<div class="product-item" data-id="${this.id}">
//          <img src="${this.img}" alt="some img">
//  <div class="desc">
//  <h3>${this.title}</h3>
//  <p>${this.price} \u20bd</p>
//  <button class="buy-btn">Купить</button>
//  </div>
//  </div>`
//     }
// }
//
// const prod = new GetProduct();

//======================================================================================\\
let price = document.querySelector('.HTML__price')
let ccal = document.querySelector('.HTML__cal')

class ProductsItem {
    constructor() {
        this.product = [];
        this.totalPrice =[];
        this.totalCcal = [];

        this.products();
        this.target();
    }

    products() {
        this.product = [
            {id: 1, title: 'Большой гамбургер', price: 100, ccal: 40},
            {id: 2, title: 'Маленький гамбургер', price: 50, ccal: 20},
            {id: 3, title: 'сыр', price: 10, ccal: 20},
            {id: 4, title: 'салат', price: 20, ccal: 5},
            {id: 5, title: 'картофель', price: 15, ccal: 10},
            {id: 6, title: 'приправа', price: 15, ccal: 0},
            {id: 7, title: 'мазик', price: 20, ccal: 5},
        ]
    }

    target() {
        const product = this.product;
        const totalPrice = this.totalPrice;
        const totalCcal = this.totalCcal;
        const btn = document.querySelectorAll("button");
        btn.forEach(function (elem, i) {
            elem.addEventListener("click", (event) => {
                if(i == event.target.id){
                    totalPrice.push(product[i - 1].price)
                    let fullPrice = totalPrice.reduce(sum);
                    function sum(total, value) {
                        return total + value;
                    }

                    price.innerHTML = fullPrice;
                }
                if(i == event.target.id){
                    totalCcal.push(product[i - 1].ccal);
                    let fullCcal = totalCcal.reduce(sum);
                    function sum(total, value) {

                        return total + value;
                    }

                    ccal.innerHTML = fullCcal;
                }
            })
        })

    }


}

const prod = new ProductsItem();
let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    price.innerHTML = '';
    ccal.innerHTML = '';
})



















