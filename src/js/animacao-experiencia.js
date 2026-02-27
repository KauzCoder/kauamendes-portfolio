const tabsIndicator = document.querySelector('.tabs__indicator');
const tabsList = document.querySelector('.experiencia-educacao__nav');
const btn = document.querySelectorAll('.experiencia-educacao__nav-btn');

function moveIndicatorTo(button) {
      if (!tabsIndicator || !tabsList || !button) return;

      const btnRect = button.getBoundingClientRect();
      const tabsRect = tabsList.getBoundingClientRect();
      const left = btnRect.left - tabsRect.left;
      const width = btnRect.width;

      tabsIndicator.style.transform = `translateX(${left}px)`;
      tabsIndicator.style.width = `${width}px`;
}

const initialButton = document.querySelector('.experiencia-educacao__nav-btn.ativo') || btn[0];
moveIndicatorTo(initialButton);

 btn.forEach(btn => {
      btn.addEventListener("click", () => moveIndicatorTo(btn));
});