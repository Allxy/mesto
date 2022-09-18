export default class FormValidator {
  constructor(config, formElement) {
    this._fieldSetSelector = config.fieldSetSelector;
    this._inputSelector = config.inputSelector;
    this._inputErrorSelector = config.inputErrorSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._submitButtonDisabledClass = config.submitButtonDisabledClass;
    this._inputErrorActiveClass = config.inputErrorActiveClass;
    this._formElement = formElement;
  }

  _showInputError(fieldSetElement, inputElement) {
    const errorInput = fieldSetElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorSelector);
    errorInput.textContent = inputElement.validationMessage;
    errorInput.classList.add(this._inputErrorActiveClass);
  }

  _hideInputError(fieldSetElement, inputElement) {
    const errorInput = fieldSetElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorSelector);
    errorInput.classList.remove(this._inputErrorActiveClass);
    errorInput.textContent = "";
  }

  _checkInputValidity(fieldSetElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(fieldSetElement, inputElement);
    } else {
      this._hideInputError(fieldSetElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", "");
      buttonElement.classList.add(this._submitButtonDisabledClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._submitButtonDisabledClass);
    }
  }

  _setupInputVlidation(fieldSetElement) {
    const buttonElement = fieldSetElement.querySelector(
      this._submitButtonSelector
    );
    const inputList = [
      ...fieldSetElement.querySelectorAll(this._inputSelector),
    ];
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(fieldSetElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    [...this._formElement.querySelectorAll(this._fieldSetSelector)].forEach(
      (fieldSet) => {
        this._setupInputVlidation(fieldSet);
      }
    );

    return () => {
      const inputList = [
        ...this._formElement.querySelectorAll(this._inputSelector),
      ];
      const buttonElement = this._formElement.querySelector(
        this._submitButtonSelector
      );

      inputList.forEach((inputElement) => {
        this._hideInputError(this._formElement, inputElement);
      });

      this._toggleButtonState(inputList, buttonElement);
    };
  }
}
