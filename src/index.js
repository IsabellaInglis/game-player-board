const addButtonFunctionality = ({ containerSelector, colors }) => {
  let energyCount = 0;
  const energyContainer = document.querySelector(containerSelector);
  const energyButtons = energyContainer.querySelectorAll(`button`);

  const assignEnergyButtonColours = () => {
    energyButtons.forEach((energyButton) => {
      energyButton.style.backgroundColor =
        Number(energyButton.id) <= energyCount
          ? colors.selected
          : colors.unselected;
    });
  };

  energyButtons.forEach((energyButton) => {
    energyButton.addEventListener(`click`, (item) => {
      const id = item.target.id;
      energyCount = id;
      assignEnergyButtonColours();
    });
  });
};
// add energy button functionality
addButtonFunctionality({
  containerSelector: `.energy-points`,
  colors: { selected: `rgb(11, 179, 11)`, unselected: `rgb(6, 111, 6)` },
});

// add block button functionality
addButtonFunctionality({
  containerSelector: `.block-list`,
  colors: {
    selected: `rgb(36, 138, 247)`,
    unselected: `rgb(56, 117, 183)`,
  },
});

// add HP functionality
addButtonFunctionality({
  containerSelector: `.hp-list`,
  colors: {
    selected: `rgb(247, 41, 41)`,
    unselected: `rgb(159, 30, 30)`,
  },
});
