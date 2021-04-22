import ResultComponent from '../components/Result/index'
import InputGroupComponent from '../components/InputGroup/index'
import BtnGroupComponent from '../components/BtnGroup/index'

import compute from '../lib/compute';
import { trimSpace, digitalize } from '../utils/tools';

@compute
export default class Calculator {
  constructor(el) {
    this.name = 'calculator';
    this.el = el;

    this.resultComponent = new ResultComponent();
    this.inputGroupComponent = new InputGroupComponent();
    this.btnGroupComponent = new BtnGroupComponent();

    this.data = this.defineData()

    this.selectedIndex = 0;
  }

  init () {
    this.render();
    this.bindEvent();
  }

  defineData () {
    // let _obj = {},
    //   method = 'plus',
    //   fVal = 0,
    //   sVal = 0;

    const _self = this;

    let target = {
      method: 'plus',
      fVal: 0,
      sVal: 0
    }

    return new Proxy(target, {
      get (target, prop) {
        return target[prop];
      },
      set (target, prop, value) {
        target[prop] = value;
        _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
        // you need return something or
        // Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'fVal'
        return true;
      }
    })

    //#region 
    // Object.defineProperties(_obj, {
    //   method: {
    //     get () {
    //       return method;
    //     },
    //     set (newVal) {
    //       method = newVal;
    //       _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
    //     }
    //   },
    //   fVal: {
    //     get () {
    //       return fVal;
    //     },
    //     set (newVal) {
    //       fVal = newVal;
    //       _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
    //     }
    //   },
    //   sVal: {
    //     get () {
    //       return sVal;
    //     },
    //     set (newVal) {
    //       sVal = newVal;
    //       _self.setResult(_self.data.method, _self.data.fVal, _self.data.sVal);
    //     }
    //   }
    // })
    // return _obj;
    //#endregion
  }

  render () {
    const oFrag = document.createDocumentFragment()
    oFrag.appendChild(this.resultComponent.tpl())
    oFrag.appendChild(this.inputGroupComponent.tpl())
    oFrag.appendChild(this.btnGroupComponent.tpl())

    this.el.appendChild(oFrag);
  }

  bindEvent () {
    const el = this.el;

    this.oResult = el.getElementsByClassName('result')[0];
    this.oInputs = el.getElementsByTagName('input');
    this.oBtnGroup = el.getElementsByClassName('button-group')[0];
    this.oBtns = this.oBtnGroup.getElementsByClassName('btn');

    this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false);
    this.oInputs[0].addEventListener('input', this.onInput.bind(this), false);
    this.oInputs[1].addEventListener('input', this.onInput.bind(this), false);
  }

  onBtnClick (ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      const method = tar.getAttribute('data-method');

      this.setData('method', method);
      this.setBtnSelected(tar);
    }
  }

  onInput (ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      id = tar.getAttribute('data-id'),
      val = digitalize(trimSpace(tar.value));

    this.setData(id, val)
  }

  setData (field, newVal) {
    switch (field) {
      case 'fVal':
        this.data.fVal = newVal;
        break;
      case 'sVal':
        this.data.sVal = newVal;
        break;
      case 'method':
        this.data.method = newVal;
      default:
        break;
    }
  }

  setBtnSelected (target) {
    this.oBtns[this.selectedIndex].className = 'btn';
    this.selectedIndex = [].indexOf.call(this.oBtns, target);
    this.oBtns[this.selectedIndex].className += ' selected';
  }

  setResult (method, fVal, sVal) {
    this.oResult.innerText = this[method](fVal, sVal);
  }
};
