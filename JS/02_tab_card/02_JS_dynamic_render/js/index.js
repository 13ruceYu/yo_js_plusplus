; (function (doc, tools) {
  var Tab = function (options) {
    this.oTab = doc.querySelector(options.el),

      this.curIdx = 0;
  }

  Tab.prototype.init = function () {
    this.bindEvent()
  }

  Tab.prototype.bindEvent = function () {
    this.oNav.addEventListener('click', this.onNavClick.bind(this), false)
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
    switch (field) {
      case 'add':
        this.oNavItems[index].className = this.classObj.navItem.current;
        this.oPageItems[index].className = this.classObj.pageItem.current;
        break;
      case 'remove':
        this.oNavItems[index].className = this.classObj.navItem.origin;
        this.oPageItems[index].className = this.classObj.pageItem.origin;
        break;
      default:
        break;
    }
  }

  window.Tab = Tab;
})(document, initToolsModule);