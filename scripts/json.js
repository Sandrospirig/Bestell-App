"use strict";

let myDishes = [
  {
    category: "Starters",
    dishes: [
      {
        img: "./assets/img/satay.jpg",
        name: "Authentic Satay",
        price: 7.9,
        description:
          "Marinated skewers of chicken or beef in coconut milk and spices, served with a savory peanut dipping sauce.",
      },
      {
        img: "./assets/img/todmunpla.jpg",
        name: "Tod Mun Pla",
        price: 5.9,
        description:
          "Savory patties made from minced white fish or shrimp, mixed with red curry paste and fragrant kaffir leaves.",
      },
      {
        img: "./assets/img/popiatod.jpg",
        name: "Po Pia Tod",
        price: 8.9,
        description:
          " Crispy fried rolls stuffed with glass noodles, vegetables, and minced meat, with a sweet chili sauce.",
      },
    ],
  },
  {
    category: "Main dishes",
    dishes: [
      {
        img: "./assets/img/padthai.jpg",
        name: "Pad Thai",
        price: 9.9,
        description:
          "Stir-fried rice noodles with tamarind, fish sauce, peanuts- with chicken, shrimp, or tofu.",
      },
      {
        img: "./assets/img/padkrapao.jpg",
        name: "Pad Kra Pao",
        price: 10.9,
        description:
          "Minced beef, stir-fried with garlic, chilies, and holy basil, served with a crispy fried egg on top.",
      },
      {
        img: "./assets/img/tomyumgoong.jpg",
        name: "Tom Yum Goong",
        price: 12.9,
        description:
          "Hot and sour soup with shrimp, mushrooms, and a broth with lemongrass, galangal.",
      },
    ],
  },
  {
    category: "Desserts",
    dishes: [
      {
        img: "./assets/img/khaoniaomamuang.jpg",
        name: "Khao Niao Mamuang",
        price: 5.9,
        description:
          "Sweet, ripe yellow mango served alongside warm, salty-sweet coconut sticky rice.",
      },
      {
        img: "./assets/img/kanomtuay.jpg",
        name: "Kanom Tuay",
        price: 5.9,
        description:
          "A steamed dessert where the bottom is a sweet base, topped with a rich and slightly salty coconut pudding.",
      },
      {
        img: "./assets/img/bualoy.jpg",
        name: "Bua Loy",
        price: 5.9,
        description:
          "Colorful rice flour dumplings served in a warm, sweet coconut milk broth.",
      },
    ],
  },
];

let basket = [
  {
    title: "Your Basket",
    empty:
      "Nothing here yet.</br> Go ahead and choose something</br> delicious!",
    img: "./assets/icons/basket-img.png",
    items: [],
  },
];
