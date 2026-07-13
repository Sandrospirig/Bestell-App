"use strict";

function getCategoryTemplate(category, catIndex) {
  return `<h2>${category.category}</h2>`;
}

function getDishTemplate(dish, dishIndex) {
  return `<div class="content-box">
        <img src="${dish.img}" alt="${dish.name}" class="dish-img">
        <div class="dish-description">
        <div class="name-and-price">
        <p class= "name" >${dish.name}</p>
          <p class= "price" >${dish.price.toFixed(2)}$</p>
          </div>
          <p class= "description" >${dish.description}$</p>
          <Button class="btn-atb">Add to basket</Button>
          </div>
        </div>`;
}

// function getCommentTemplate(c) {
//   return `<p class= "comment-space"><span class="left">${c.name}:</span><span class="right"> ${c.comment}</span></p>`;
// }
