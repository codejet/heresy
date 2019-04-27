import {html, render, svg, transform} from 'lighterhtml';

export {html, render, svg};
export const define = Class => {
  const {name, tagName} = Class;
  if (!name)
    throw `Undefined class name`;
  if (!tagName)
    throw `Undefined ${name} static tagName`;

  const is = name.toLowerCase() + '-heresy';
  customElements.define(is, Class, {extends: tagName});

  // all good here: setup transformer
  const re = new RegExp(`<(/)?${name}(\\s|>)`, 'g');
  const place = ($, a, b) => a ? `</${tagName}>` : `<${tagName} is="${is}"${b}`;
  transform(markup => markup.replace(re, place));
  const wrap = (self, type) => (...args) => render(self, () => type(...args));

  // enrich the class and its prototype
  const selector = {value: `${tagName}[is="${is}"]`};
  const {defineProperties} = Object;
  defineProperties(Class, {selector});
  defineProperties(
    Class.prototype,
    {
      selector,
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
