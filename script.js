"use strict";

function init() {
  renderDishes();
}

function renderDishes() {
  let contentRef = document.getElementById("dish-wrapper");
  contentRef.innerHTML = "";

  for (let catIndex = 0; catIndex < myDishes.length; catIndex++) {
    let category = myDishes[catIndex];

    contentRef.innerHTML += getCategoryTemplate(category, catIndex);

    for (let dishIndex = 0; dishIndex < category.dishes.length; dishIndex++) {
      let dish = category.dishes[dishIndex];

      contentRef.innerHTML += getDishTemplate(dish, dishIndex);
    }
  }
}
/*
// Comment hinzufügen
function addComment(index) {
  let nameInputRef = document.getElementById(`name-input-${index}`);
  let commentInputRef = document.getElementById(`comment-input-${index}`);
  if (nameInputRef.value !== "" && commentInputRef.value !== "") {
    books[index].comments.push({
      name: nameInputRef.value,
      comment: commentInputRef.value,
    });
  }
  saveToLocalStorage();
  renderBooks();
  nameInputRef.value = "";
  commentInputRef.value = "";
}

//-> comments archivieren
function saveToLocalStorage(index) {
  localStorage.setItem("allDataComments", JSON.stringify(books));
}

function getFromLocalStorageComments() {
  let myArr1 = JSON.parse(localStorage.getItem("allDataComments"));

  if (myArr1 !== null) {
    return (books = myArr1);
  }
}

function addLike(index) {
  let counterRef = document.getElementById(`like-${index}`);
  if (counterRef) {
    let currentLikes = parseInt(counterRef.innerText) || 0;
    counterRef.innerText = currentLikes + 1;
  }
}
*/
