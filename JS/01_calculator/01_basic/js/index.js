var oCalculator = document.getElementsByClassName('J_calculator')[0],
  oResult = oCalculator.getElementsByClassName('result')[0],
  fInput = oCalculator.getElementsByTagName('input')[0],
  sInput = oCalculator.getElementsByTagName('input')[1],
  oBtnGroup = oCalculator.getElementsByClassName('button-group')[0];

oBtnGroup.addEventListener('click', onBtnClick, false);

function onBtnClick (ev) {
  // 对 ie 的兼容性的处理
  var e = ev || window.event,
    tar = e.target || e.srcElement;

  var tagName = tar.tagName.toLowerCase();

  if (tagName === 'button') {
    var method = tar.getAttribute('data-method'),
      fVal = Number(fInput.value.replace(/\s+/g, '')) || 0,
      sVal = Number(sInput.value.replace(/\s+/g, '')) || 0;

    switch (method) {
      case 'plus':
        oResult.innerText = fVal + sVal;
        break;
      case 'minus':
        oResult.innerText = fVal - sVal;
        break;
      case 'mul':
        oResult.innerText = fVal * sVal;
        break;
      case 'div':
        oResult.innerText = fVal / sVal;
        break;
      default:
        break;
    }
  }
}
