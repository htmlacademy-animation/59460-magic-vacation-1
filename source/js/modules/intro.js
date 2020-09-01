import {TypographyAnimation} from './typography-animation';

export default () => {
  window.addEventListener(`load`, () => {
    const titleTypographyAnimation = new TypographyAnimation(`.intro__title`, 500, `active`, `intro__title-word`, `transform`);
    const labelTypographyAnimation = new TypographyAnimation(`.intro__label`, 500, `active`, `intro__label-word`, `transform`);
    setTimeout(() => {
      titleTypographyAnimation.runAnimation();
      labelTypographyAnimation.runAnimation();
    });
  });
};
