function showInputError(
  formElement,
  inputElement,
  { inputErrorSelector, inputErrorActiveClass }
) {
  const errorInput = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorSelector);
  errorInput.textContent = inputElement.validationMessage;
  errorInput.classList.add(inputErrorActiveClass);
}

function hideInputError(
  formElement,
  inputElement,
  { inputErrorSelector, inputErrorActiveClass }
) {
  const errorInput = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorSelector);
  errorInput.classList.remove(inputErrorActiveClass);
  errorInput.textContent = "";
}

function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(
  inputList,
  buttonElement,
  submitButtonDisabledClass
) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", "");
    buttonElement.classList.add(submitButtonDisabledClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(submitButtonDisabledClass);
  }
}

function setupInputVlidation(
  formElement,
  { inputSelector, submitButtonSelector, submitButtonDisabledClass, ...other }
) {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  const inputList = [...formElement.querySelectorAll(inputSelector)];
  toggleButtonState(inputList, buttonElement, submitButtonDisabledClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, other);
      toggleButtonState(inputList, buttonElement, submitButtonDisabledClass);
    });
  });
}

function enableValidation({ formSelector, fieldSetSelector, ...other }) {
  [...document.querySelectorAll(formSelector)].forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    [...formElement.querySelectorAll(fieldSetSelector)].forEach((fieldSet) => {
      setupInputVlidation(fieldSet, other);
    });
  });

  return function (formElement) {
    const { inputSelector, submitButtonSelector, submitButtonDisabledClass } = other;
    const inputList = [...formElement.querySelectorAll(inputSelector)];
    const buttonElement = formElement.querySelector(submitButtonSelector);

    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, other);
    });

    toggleButtonState(inputList, buttonElement, submitButtonDisabledClass);
  };
}

const validationConfig = {
  formSelector: ".popup__form",
  fieldSetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  inputErrorSelector: ".popup__input_error",
  submitButtonSelector: ".popup__save-btn",
  submitButtonDisabledClass: "popup__save-btn_disabled",
  inputErrorActiveClass: "popup__input-error_active",
};

const resetValidation = enableValidation(validationConfig);
