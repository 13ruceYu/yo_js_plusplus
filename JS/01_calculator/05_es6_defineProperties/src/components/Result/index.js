import tpl from './index.tpl';

export default class ResultComponent {
  constructor() {
    this.name = 'ResultComponent';
  }

  tpl () {
    // 1. 创建
    const oDiv = document.createElement('div');
    // 2. 赋值
    oDiv.innerHTML = tpl();
    // 3. 返回
    return oDiv;
  }
}