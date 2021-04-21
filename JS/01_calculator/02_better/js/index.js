; (function (doc, tools, compute) {
  var oCalculator = doc.getElementsByClassName('J_calculator')[0],
    oResult = oCalculator.getElementsByClassName('result')[0],
    oInputs = oCalculator.getElementsByTagName('input'),
    oBtnGroup = oCalculator.getElementsByClassName('button-group')[0];

  init();

  function init () {
    bindEvent();
  }

  function bindEvent () {
    oBtnGroup.addEventListener('click', onBtnClick, false);
  }

  function onBtnClick (ev) {
    // ie 兼容性
    var tar = tools.getTarget(ev);

    var tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      var method = tar.getAttribute('data-method'),
        fVal = tools.digitalize(oInputs[0].value),
        sVal = tools.digitalize(oInputs[1].value);

      renderResult(compute[method](fVal, sVal));
    }
  }

  function renderResult (result) {
    oResult.innerText = result;
  }
})(document, commonTools, commonCompute);