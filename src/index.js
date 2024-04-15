let energyCount = 0;

const energyContainer = document.querySelector(`.energy-points`);
const energyButtons = energyContainer.querySelectorAll(`button`);

const assignEnergyButtonColours = () => {
  energyButtons.forEach((energyButton) => {
    energyButton.style.backgroundColor =
      energyButton.id <= energyCount ? `rgb(11, 179, 11)` : `rgb(6, 111, 6)`;
  });
};

energyButtons.forEach((energyButton) => {
  energyButton.addEventListener(`click`, (item) => {
    const id = item.target.id;
    energyCount = id;
    assignEnergyButtonColours();
  });
});
