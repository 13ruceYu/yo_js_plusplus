import tpl from './index.tpl';
import './index.css'

export default class BtnGroupComponent {
  constructor() {
    this.name = 'BtnGroupComponent';
  }

  tpl () {
    const oDiv = document.createElement('div');
    oDiv.className = 'button-group';
    oDiv.innerHTML = tpl();
    return oDiv;
  }
}