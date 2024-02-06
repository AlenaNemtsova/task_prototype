'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElem = function () {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
    } else if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.slice(1));
    }

    elem.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    `;

    elem.textContent = 'Element';
    document.body.append(elem);
}

const div1 = new DomElement('.bla', '50px', '100px', 'yellow', '20px')

div1.createElem();

