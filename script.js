"use strict";

function init() {
  renderDishes();
  renderBasket();
}

let deliveryFee = 15;

function renderDishes() {
  let contentRef = document.getElementById("dish-wrapper");
  contentRef.innerHTML = "";
  for (let catIndex = 0; catIndex < myDishes.length; catIndex++) {
    let category = myDishes[catIndex];
    contentRef.innerHTML += getCategoryTemplate(category, catIndex);
    for (let dishIndex = 0; dishIndex < category.dishes.length; dishIndex++) {
      let dish = category.dishes[dishIndex];
      contentRef.innerHTML += getDishTemplate(dish, catIndex, dishIndex);
    }
  }
}

function renderBasket() {
  let contentRef = document.getElementById("basket-wrapper");
  let basketData = basket[0];

  if (basketData.items.length === 0) {
    contentRef.innerHTML = getEmptyBasketTemplate(basketData);
  } else {
    contentRef.innerHTML = getFullBasketData(basketData);
  }
}

function getFullBasketData(basketData) {
  let htmlRef = `<div class="content-basket">
  <h3>${basketData.title}</h3><div class="added-to-basket">`;

  for (let i = 0; i < basketData.items.length; i++) {
    htmlRef += getBasketTemplate(basketData.items[i], i);
  }
  htmlRef += `</div>`;
  htmlRef += getFullPriceTemplate(
    calculateSubTotal(basketData.items),
    deliveryFee,
    calculateTotal(calculateSubTotal(basketData.items), deliveryFee),
  );
  return htmlRef + `</div>`;
}

function addToBasket(catIndex, dishIndex) {
  let selectedDish = myDishes[catIndex].dishes[dishIndex];
  let dishWitcount = { ...selectedDish, count: 1 };
  basket[0].items.push(dishWitcount);
  renderBasket();
}

function calculateSubTotal(items) {
  let subSum = 0;
  for (let i = 0; i < items.length; i++) {
    subSum += items[i].price * items[i].count;
  }
  return subSum;
}

function calculateTotal(calculateSubTotal, deliveryFee) {
  let totalSum = calculateSubTotal + deliveryFee;
  return totalSum;
}

function removeItem(i) {
  let item = basket[0].items[i];
  if (item.count > 1) {
    item.count--;
  } else {
    basket[0].items.splice(i, 1);
  }
  renderBasket();
}

function addCount(i) {
  let itemCount = basket[0].items[i];
  itemCount.count++;
  renderBasket();
}
