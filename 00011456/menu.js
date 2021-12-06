// Dynamically loading the data
const container = document.querySelector("#menu-container");

count = 0;

window.addEventListener("load", loadData());

function loadData() {
  fetch("menu.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setMenu(data);
    })
    .catch(() => {
      menuItems.textContent = "Error is occured";
    });
}

function setMenu(menus) {
  menus.forEach((menu) => {
    let menuItems = document.createElement("div");
    let menuBox = document.createElement("div");
    let title = document.createElement("h2");

    menuItems.setAttribute("class", "menu-items");
    menuBox.setAttribute("class", "menu__box");
    title.setAttribute("class", "menu__heading");

    title.textContent = menu.title;

    menuItems.appendChild(title);

    menu.items.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let card__img = document.createElement("img");
      card__img.classList.add("card__img");
      let card__text = document.createElement("p");
      card__text.classList.add("card__text");
      let card__cost = document.createElement("div");
      card__cost.classList.add("card__cost");
      let card__costPrice = document.createElement("p");
      card__costPrice.classList.add("card__cost--price");
      let card__btn = document.createElement("button");
      card__btn.classList.add("card__btn");
      card__btn.textContent = "Add";

      card__img.src = item.img;
      card__text.textContent = item.burgerName;
      card__costPrice.textContent = "$" + item.price;
      card__cost.appendChild(card__costPrice);
      card__cost.appendChild(card__btn);

      card.appendChild(card__img);
      card.appendChild(card__text);
      card.appendChild(card__cost);

      menuBox.appendChild(card);
    });

    menuItems.appendChild(menuBox);
    container.appendChild(menuItems);
  });
}
