import {html, render, svg, transform} from 'lighterhtml';

export {html, render, svg};
export const define = Class => {
  const {name, tagName, style: css} = Class;
  if (!name)
    throw `Undefined class name`;
  if (!tagName)
    throw `Undefined ${name} static tagName`;

  const is = name.toLowerCase() + '-heresy';
  customElements.define(is, Class, {extends: tagName});

  if (css) {
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet)
      style.styleSheet.cssText = css;
    else
      style.appendChild(document.createTextNode(css));
    const head = document.head || document.querySelector('head');
    head.insertBefore(style, head.lastChild);
  }

  // all good here: setup transformer
  const re = new RegExp(`<(/)?${name}(\\s|>)`, 'g');
  const place = ($, a, b) => a ? `</${tagName}>` : `<${tagName} is="${is}"${b}`;
  transform(markup => markup.replace(re, place));
  const wrap = (self, type) => (...args) => render(self, () => type(...args));
  Object.defineProperties(
    Class.prototype,
    {
      html: {
        get() {
          return wrap(this, html);
        }
      },
      svg: {
        get() {
          return wrap(this, svg);
        }
      }
    }
  );
};
