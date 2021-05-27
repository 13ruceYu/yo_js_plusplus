import './index.scss'

import tpl from './index.tpl';

export default class TestChild {
  constructor () {
    this.name = 'TestChild'
  }

  tpl () {
    const oDiv = document.createElement('div');
    oDiv.innerHTML = tpl();
    return oDiv;
  }
}