import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(selector, callback) {
    super(selector);
    this._callback = callback;
    this._confirmButton = this._popup.querySelector(".popup__save-btn");
  }

  open(data) {
    super.open();
    this._data = data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      this._callback(this._data);
      this.close();
    });
  }
}
