const addCss = (elem, style) => {
  elem = elem.trim();
  style = style.trim();
  Array.from(document.querySelectorAll(elem)).forEach((eachItem) => {
    eachItem.classList.add(style);
  });
};

addCss(".carousel-item h5", "display-6");
addCss(".carousel-caption", "px-5");
