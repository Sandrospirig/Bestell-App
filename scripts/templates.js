"use strict";

function getCategoryTemplate(category, catIndex) {
  return `<h2>${category.category}</h2>`;
}

function getDishTemplate(dish, catIndex, dishIndex) {
  return `<div class="content-box">
        <img src="${dish.img}" alt="${dish.name}" class="dish-img">
        <div class="dish-description">
        <div class="name-and-price">
        <p class= "name" >${dish.name}</p>
          <p class= "price" >${dish.price.toFixed(2)}$</p>
          </div>
          <p class= "description">${dish.description}</p>
          <Button id="btn-atb" onclick="addToBasket(${catIndex}, ${dishIndex})">Add to basket</Button>
          </div>
        </div>`;
}

function getEmptyBasketTemplate(basketData) {
  return `<div class="content-basket">
        <h3>${basketData.title}</h3>
        <p>${basketData.empty}</p>
        <img src=${basketData.img} alt="basket-icon" class="basket-img">
        </div>`;
}

function getBasketTemplate(item, i) {
  let itemTotalPrice = item.price * item.count;
  return `<div class="basket-description">
         <p id= "basket-name" >${item.name}</p>
          <div class="basket-toolbar">
        <div class="basket-btns"><button id="delete-btn" onclick="removeItem(${i})"><img src="./assets/icons/delete-btn.png" alt="delete-btn" id="delete-btn-img"></button><span>${item.count}</span><button id="plus-btn" onclick="addCount(${i})"><p id="plus">+</p></button></div>
        <span class= "basket-price" >${item.price.toFixed(2)}$</span></div>
        </div>`;
}

function getFullPriceTemplate(subSum, deliveryFee, totalSum) {
  return `<div class="calculate">
      <div class="subtotal"><p>Subtotal</p><p>${subSum.toFixed(2)}$</p></div>
      <div class="delivery-fee"><p>Delivery-fee</p><p>${deliveryFee.toFixed(2)}$</p></div>
      <div class="total"><p>Total</p><p >${totalSum.toFixed(2)}$</p></div>
      <button class="buy-now">Buy now  ${totalSum.toFixed(2)}$</button></div>`;
}
