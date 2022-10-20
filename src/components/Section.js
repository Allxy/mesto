export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems( items ) {
    this.clear();
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element, toEnd = false) {
    if (toEnd) this._container.append(element);
    else this._container.prepend(element);
  }

  addItems(elements, reverse) {
    elements.forEach((element) => {
      if (reverse) this._container.append(element);
      else this._container.prepend(element);
    });
  }

  clear() {
    this._container.innerHTML = "";
  }
}
