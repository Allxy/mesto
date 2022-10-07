export default class FormValidator {
  constructor(config, formElement) {
    this._fieldSetSelector = config.fieldSetSelector;
    this._inputSelector = config.inputSelector;
    this._inputErrorSelector = config.inputErrorSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._submitButtonDisabledClass = config.submitButtonDisabledClass;
    this._inputErrorActiveClass = config.inputErrorActiveClass;
    this._formElement = formElement;
    this._inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    const errorInput = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorSelector);
    errorInput.textContent = inputElement.validationMessage;
    errorInput.classList.add(this._inputErrorActiveClass);
  }

  _hideInputError(inputElement) {
    const errorInput = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorSelector);
    errorInput.classList.remove(this._inputErrorActiveClass);
    errorInput.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", "");
      this._buttonElement.classList.add(this._submitButtonDisabledClass);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._submitButtonDisabledClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();
  }
}
