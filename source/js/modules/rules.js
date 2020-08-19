export default () => {
  window.addEventListener(`load`, () => {
    const lastRulesItem = document.querySelector(`.rules__item:last-child p`);
    const rulesLink = document.querySelector(`.rules__link`);
    lastRulesItem.addEventListener(`animationend`, () => {
      rulesLink.classList.add(`rules__link--active`);
    });
  });
};
