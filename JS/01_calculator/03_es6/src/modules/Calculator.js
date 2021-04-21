import compute from '../lib/compute';
import { trimSpace, digitalize } from '../utils/tools';

@compute
export default class Calculator {
  constructor(el) {
    this.name = 'calculator';

    this.oResult = el.getElementsByClassName('result')[0];
    this.oInputs = el.getElementsByTagName('input');
    this.oBtnGroup = el.getElementsByClassName('button-group')[0];
  }

  init () {
    this.bindEvent();
  }

  bindEvent () {
    this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false);
  }

  onBtnClick (ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      const method = tar.getAttribute('data-method'),
        fVal = digitalize(trimSpace(this.oInputs[0].value)),
        sVal = digitalize(trimSpace(this.oInputs[1].value));

      this.setResult(method, fVal, sVal);
    }
  }

  setResult (method, fVal, sVal) {
    this.oResult.innerText = this[method](fVal, sVal);
  }
};
