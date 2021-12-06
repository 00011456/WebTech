// Initializing
const burger = document.getElementById("check");
const dropdown = document.querySelector(".dropdown");
const imgFirst = document.getElementById("img-1");
const imgSecond = document.getElementById("img-2");
const imgThird = document.getElementById("img-3");
const dotFirst = document.getElementById("dot-1");
const dotSecond = document.getElementById("dot-2");
const dotThird = document.getElementById("dot-3");
const loader = document.querySelector(".loader");
const body = document.querySelector("body");
const check = document.getElementById("check");

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// Slider-velosidped
if (dotFirst) {
  dotFirst.addEventListener("click", () => {
    imgFirst.style.display = "block";
    imgSecond.style.display = "none";
    imgThird.style.display = "none";
    dotFirst.classList.add("active");
    dotSecond.classList.remove("active");
    dotThird.classList.remove("active");
  });
  dotSecond.addEventListener("click", () => {
    imgFirst.style.display = "none";
    imgSecond.style.display = "block";
    imgThird.style.display = "none";
    dotFirst.classList.remove("active");
    dotSecond.classList.add("active");
    dotThird.classList.remove("active");
  });
  dotThird.addEventListener("click", () => {
    imgFirst.style.display = "none";
    imgSecond.style.display = "none";
    imgThird.style.display = "block";
    dotFirst.classList.remove("active");
    dotSecond.classList.remove("active");
    dotThird.classList.add("active");
  });
}

// Burger Menu
check.addEventListener("change", () => {
  if (check.checked) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

// Loader
if (loader) {
  init();
}
function init() {
  body.style.overflow = "hidden";
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    body.style.overflow = "auto";
  }, 2000);
}
