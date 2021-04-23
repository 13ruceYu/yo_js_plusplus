; (function (doc, tools) {
  var Tab = function () {
    var oTab = doc.getElementsByClassName('J_tab')[0],
      oPage = oTab.getElementsByClassName('page')[0];

    this.oNav = oTab.getElementsByClassName('nav')[0];
    this.oNavItems = oTab.getElementsByClassName('nav-item');
    this.oPageItems = oTab.getElementsByClassName('page-item');

    this.curIdx = 0;
    this.classObj = {
      navItem: {
        origin: 'nav-item',
        current: 'nav-item current'
      },
      pageItem: {
        origin: 'page-item',
        current: 'page-item current'
      }
    }
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