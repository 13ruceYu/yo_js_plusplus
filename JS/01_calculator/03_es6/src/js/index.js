import Calculator from '../modules/Calculator'
  ; (function (doc) {
    const oCalculator = doc.getElementsByClassName('J_calculator')[0];

    const init = () => {
      new Calculator(oCalculator).init()
    }

    init();
  })(document);