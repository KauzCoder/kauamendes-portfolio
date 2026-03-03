const tabsIndicator = document.querySelector('.tabs__indicator');
const tabsList = document.querySelector('.experiencia-educacao__nav');
const btn = document.querySelectorAll('.experiencia-educacao__nav-btn');
const panels  = [...document.querySelectorAll(".panel")];
const filtersContainer = document.querySelector('.filters');

function moveIndicatorTo(button) {
      if (!tabsIndicator || !tabsList || !button) return;

      const btnRect = button.getBoundingClientRect();
      const tabsRect = tabsList.getBoundingClientRect();
      const left = btnRect.left - tabsRect.left;
      const width = btnRect.width;

      tabsIndicator.style.transform = `translateX(${left}px)`;
      tabsIndicator.style.width = `${width}px`;
      
      btn.forEach(btn => btn.classList.remove("btn-active"));
      button.classList.add("btn-active");
}

function updateFiltersVisibility(activeButton) {
  if (!filtersContainer || !activeButton) return;

  const buttons = Array.from(btn);
  const isLastButtonActive = buttons[buttons.length - 1] === activeButton;

  filtersContainer.style.display = isLastButtonActive ? 'flex' : 'none';
  filtersContainer.setAttribute('aria-hidden', String(isLastButtonActive));
}

function showPanel(key) {
  if (!key) return;
  panels.forEach(panel => {
    panel.hidden = panel.dataset.panel !== key;
  });
}

const initialButton = document.querySelector('.experiencia-educacao__nav-btn.btn-active') || btn[0];
moveIndicatorTo(initialButton);
showPanel(initialButton?.dataset.tab);
updateFiltersVisibility(initialButton);

btn.forEach(button => {
  button.addEventListener("click", () => {
    moveIndicatorTo(button);
    showPanel(button.dataset.tab);
    updateFiltersVisibility(button);
  });
});