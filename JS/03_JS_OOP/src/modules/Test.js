import inheritProto from '../lib/inheritProto';
import {trimSpace} from '../utils/tools'

import TestChildComponent from '../components/TestChild';

@inheritProto
export default class Test {
  constructor (el) {
    this.name = 'Test';

    this.el = el;

    this.testChildComponent = new TestChildComponent();
  }

  init() {
    console.log(this.name);
    this.render();
    this.foo();
    console.log(trimSpace('yu hong bo'));
  }

  render () {
    const oFrag = document.createDocumentFragment();

    oFrag.appendChild(this.testChildComponent.tpl());

    this.el.appendChild(oFrag);
  }

}