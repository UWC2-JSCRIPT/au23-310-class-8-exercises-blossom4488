let a = 0;
const changeBG = () => {
  a++;
  document.body.style.backgroundColor = `rgb(${a},${a},${a})`;
  if (a <= 255) {
    requestAnimationFrame(changeBG);
  }
};

requestAnimationFrame(changeBG);
