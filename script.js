"use strict";

function init() {
  renderDishes();
  renderBasket();
  window.addEventListener("resize", renderBigBasketBtn);
  btnCloseModal.addEventListener("click", () => toggleModal("modal", false));
  overlay.addEventListener("click", () => toggleModal("modal", false));
}

let deliveryFee = 15;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const closeBasketWrapper = document.querySelector("#basket-wrapper");

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

/* prettier-ignore */
function renderBasket() {
  let contentRef = document.getElementById("basket-wrapper");
  let basketData = basket[0];
  if (basketData.items.length === 0) {
    contentRef.innerHTML = getEmptyBasketTemplate(basketData);
  } else {
    contentRef.innerHTML = getFullBasketData(basketData);
  }
  renderBigBasketBtn();
  if (window.innerWidth < 1200 &&contentRef?.classList.contains("is-visible")) {
    document.getElementById("close-basket")?.classList.remove("hidden");
  }
}

/* prettier-ignore */
function getFullBasketData(basketData) {
  let htmlRef = `<div class="content-basket"><button id="close-basket" class="hidden" onclick="toggleModal('basket-wrapper', false)">&times;</button><h3>${basketData.title}</h3><div class="added-to-basket">`;
  for (let i = 0; i < basketData.items.length; i++) {
    htmlRef += getBasketTemplate(basketData.items[i], i);
  }
  let sub = calculateSubTotal(basketData.items);
  htmlRef += `</div>`;
  htmlRef += getFullPriceTemplate(sub,deliveryFee,calculateTotal(sub, deliveryFee),);
  return htmlRef + `</div>`;
}

function addToBasket(catIndex, dishIndex) {
  let selectedDish = myDishes[catIndex].dishes[dishIndex];
  let dishWitcount = { ...selectedDish, count: 1 };
  let items = basket[0].items;
  let existingItem = items.find((item) => item.name === selectedDish.name);
  if (existingItem) {
    existingItem.count++;
  } else {
    basket[0].items.push(dishWitcount);
  }
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

function emptyBasket() {
  basket[0].items = [];
  renderBasket();
}

function renderBigBasketBtn() {
  let bigBasketContainer = document.querySelector(".big-basket-btn-container");
  bigBasketContainer.innerHTML = bigbasketBtntemplate();
  bigBasketContainer.classList.toggle("hidden", window.innerWidth > 1200);
}

function calculateTotalCount() {
  let items = basket[0].items;
  let totalCount = 0;
  for (let i = 0; i < basket[0].items.length; i++) {
    totalCount += items[i].count;
  }
  return totalCount;
}

/* prettier-ignore */
function toggleModal(idOfElement, show) {
  if (idOfElement === "basket-wrapper") {
    document.getElementById(idOfElement)?.classList.toggle("is-visible", show);
    document.getElementById("basket-overlay")?.classList.toggle("is-visible", show);
    toggleScroll(show);
    } else if (idOfElement === "modal") {
    modal.classList.toggle("hidden", !show);
    overlay.classList.toggle("hidden", !show);
    if (show) emptyBasket();
  }
}

function clearItem(i) {
  basket[0].items.splice(i, 1);
  renderBasket();
}

function toggleScroll(show) {
  if (window.innerWidth < 1200 && show) {
    document.body.style.overflow = "hidden";
    document.getElementById("close-basket").classList.remove("hidden");
  } else {
    document.body.style.overflow = "auto";
    document.getElementById("close-basket").classList.add("hidden");
  }
}
