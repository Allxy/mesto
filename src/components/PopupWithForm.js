import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = [...this._formElement.querySelectorAll(".popup__input")];
    this._saveButton = this._popup.querySelector(".popup__save-btn");
    this._isLoading = false;
  }

  _getInputValues() {
    return this._inputList.reduce((values, input) => {
      values[input.name] = input.value;
      return values;
    }, {});
  }

  setInputValues(values) {
    this._inputList.forEach((input) => {
      if (values[input.name]) {
        input.value = values[input.name];
      }
    });
  }

  getFormElement() {
    return this._formElement;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!this._isLoading) {
        this._submitCallback(this._getInputValues());
        this._saveButton.textContent = "Сохранение...";
        this._isLoading = true;
      }
    });
  }

  close() {
    super.close();
    this._isLoading = false;
    this._saveButton.textContent = "Сохранить";
    this._formElement.reset();
  }
}
