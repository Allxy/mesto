import constants from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
    this._formElement = this._popup.querySelector(constants.popupFormSelector);
    this._inputList = [
      ...this._formElement.querySelectorAll(constants.popupTextElementSelector),
    ];
  }

  _getInputValues() {
    return this._inputList.reduce((values, input) => {
      values[input.name] = input.value;
      return values;
    }, {});
  }

  getFormElement() {
    return this._formElement;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
