export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItem(item) {
    return this._renderer(item);
  }

  renderItems(items) {
    return items.map((item) => this._renderer(item));
  }

  addItem(item, toEnd = false) {
    if (toEnd) this._container.append(this.renderItem(item));
    else this._container.prepend(this.renderItem(item));
  }

  addItems(items, reverse) {
    this.renderItems(items).forEach((element) => {
      if (reverse) this._container.append(element);
      else this._container.prepend(element);
    });
  }

  clear() {
    this._container.innerHTML = "";
  }
}
