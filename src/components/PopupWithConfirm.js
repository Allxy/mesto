import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(selector, callback) {
    super(selector);
    this._callback = callback;
    this._confirmButton = this._popup.querySelector(".popup__save-btn");
    this._isLoading = false;
  }

  open(data) {
    super.open();
    this._data = data;
  }

  close() {
    super.close();
    this._isLoading = false;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      if (!this._isLoading) {
        this._isLoading = true;
        this._confirmButton.textContent = "Сохранение...";
        this._callback(this._data);
      }
    });
  }
}
