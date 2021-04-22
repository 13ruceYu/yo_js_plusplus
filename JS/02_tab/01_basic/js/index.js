; (function (doc, tools) {
  var Tab = function (options) {
    var oTab = doc.querySelector(options.el),
      oPage = oTab.getElementsByClassName('page')[0];

    this.oNav = oTab.getElementsByClassName('nav')[0];
    this.oNavItems = this.oNav.getElementsByClassName('nav-item');
    this.oPageItems = oPage.getElementsByClassName('page-item');

    this.curIdx = 0;

    this.classObj = options.classObj
  }

  Tab.prototype.init = function () {
    this.bindEvent();
  }

  Tab.prototype.bindEvent = function () {
    this.oNav.addEventListener('click', this.onNavClick.bind(this), false);
  }

  Tab.prototype.onNavClick = function (ev) {
    var tar = tools.getTarget(ev),
      className = tar.className;

    if (className === 'nav-item') {
      this.setCurrent(this.curIdx, 'remove');
      this.curIdx = [].indexOf.call(this.oNavItems, tar);
      this.setCurrent(this.curIdx, 'add');
    }
  }

  Tab.prototype.setCurrent = function (index, field) {
    const navItemClass = this.classObj.navItem,
      pageItemClass = this.classObj.pageItem;
    switch (field) {
      case 'remove':
        this.oNavItems[index].className = navItemClass.origin;
        this.oPageItems[index].className = pageItemClass.origin;
        break;
      case 'add':
        this.oNavItems[index].className = navItemClass.current;
        this.oPageItems[index].className = pageItemClass.current;
        break;
      default:
        break;
    }
  }

  window.Tab = Tab;
})(document, initModuleTools);