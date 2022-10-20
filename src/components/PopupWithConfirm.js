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
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      if (!this._isLoading) {
        const initialText = this._confirmButton.textContent;

        this._isLoading = true;
        this._confirmButton.textContent = "Сохранение...";
        this._callback(this._data)
          .then(() => this.close())
          .catch((err) => console.error(err.message))
          .finally(() => {
            this._confirmButton.textContent = initialText;
            this._isLoading = false;
          });
      }
    });
  }
}
