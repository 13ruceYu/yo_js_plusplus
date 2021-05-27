console.log('webpack basic config works!')
import Test from '../modules/Test';

;(function(doc) {
  const oJHook = doc.getElementsByClassName('J_hook')[0];

  const init = () => {
    new Test(oJHook).init();
  }

  init();
})(document);
