let a = 255;

let backgroundDarken = setInterval(function () {
  if (a > 0) {
    a--;
    document.body.style.backgroundColor = `rgb(${a}, ${a}, ${a})`;
  } else {
    clearInterval(backgroundDarken);
  }
}, 500);
