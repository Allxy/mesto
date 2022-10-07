export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._closeButton = this._popup.querySelector(".popup__close-btn");
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener("click", (event) => {
      if (
        event.target === event.currentTarget ||
        event.target.classList.contains("popup__close-btn")
      ) {
        this.close();
      }
    });
  }
}
