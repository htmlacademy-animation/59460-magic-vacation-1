export class TypographyAnimation {
  constructor(elementSelector, timer, classActivate, classWord, property) {
    this._TIME_STEP = 100;
    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classActivate = classActivate;
    this._classWord = classWord;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter, index) {
    const remainder = index % 3;

    if (!remainder) {
      this._timeOffset += (index ? 2 : 1);
    } else if (remainder === 1) {
      this._timeOffset += 2;
    } else if (remainder === 2) {
      this._timeOffset -= 1;
    }

    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset * this._TIME_STEP}ms`;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word, indexWord) => {
      const wordElement = Array.from(word).reduce((fragment, latter, indexLetter) => {
        const index = (indexWord * 10) + indexLetter;
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(this._classWord);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classActivate);
  }
}
