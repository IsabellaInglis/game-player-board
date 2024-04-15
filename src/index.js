const container = document.querySelector(`#energy-list`);
const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.style.backgroundColor === `rgb(6, 111, 6)`) {
      button.style.backgroundColor = `rgb(11, 179, 11)`;
    } else {
      button.style.backgroundColor = `rgb(6, 111, 6)`;
    }
  });
});
