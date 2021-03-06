import { servicesList, carouselItem } from "./data.js";

let serBox = document.querySelector(".servicesBox");
let galleryBox = document.querySelector("#gallery");
let carouselInner = document.querySelector(".carousel-inner");
let carouselItems = Array.from(document.querySelectorAll(".carousel-item"));

const addCss = (elem, style) => {
  elem = elem.trim();
  style = style.trim();
  Array.from(document.querySelectorAll(elem)).forEach((eachItem) => {
    eachItem.classList.add(style);
  });
};

addCss(".carousel-item h5", "display-6");
addCss(".carousel-caption", "px-5");

serBox.innerHTML = servicesList.map((eachList) => {
  return `<h5> ${eachList.heading} </h5>
            <ul>
            <p>${eachList.p1 === undefined ? "" : eachList.p1}</p>
            <p>${eachList.p2 === undefined ? "" : eachList.p2}</p>
            <p>${eachList.p3 === undefined ? "" : eachList.p3}</p>
            <p>${eachList.p4 === undefined ? "" : eachList.p4}</p>
            <p>${eachList.p5 === undefined ? "" : eachList.p5}</p>
            <p>${eachList.p6 === undefined ? "" : eachList.p6}</p>
            
            </ul>
  `;
});

let wholeImages = [];

for (let i = 1; i <= 36; i++) {
  wholeImages.push(
    `<img class="d-block mx-auto g-4" src="./images/gallery/galls${i
      .toString()
      .padStart(2, "0")}.jpg" alt="image${1}">`
  );
}

galleryBox.innerHTML = wholeImages;

for (let i = 0; i < carouselItems.length; i++) {
  carouselItems[i].setAttribute(
    "style",
    `background-image:${carouselItem[i]["li-gradient"]}, url(${carouselItem[i].imageURL});`
  );

  carouselItems[i].innerHTML = `
  <div class="carousel-caption mt-5 px-5 text-center mx-auto d-block">
  <h5 class="display-2 fw-normal mb-5">${carouselItem[i].h5}</h5>
  <p class="lead fw-normal ">${carouselItem[i].p} </p>
</div>
  `;
}

// carouselInner.innerHTML = allCarousel;
