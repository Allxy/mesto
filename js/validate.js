function showInputError(
  formElement,
  inputElement,
  { inputError, errorActive }
) {
  const errorInput = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputError);
  errorInput.textContent = inputElement.validationMessage;
  errorInput.classList.add(errorActive);
}

function hideInputError(
  formElement,
  inputElement,
  { inputError, errorActive }
) {
  const errorInput = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputError);
  errorInput.classList.remove(errorActive);
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

function toggleButtonState(inputList, buttonElement, submitDisabledClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", "");
    buttonElement.classList.add(submitDisabledClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(submitDisabledClass);
  }
}

function setupInputVlidation(
  formElement,
  { input, submit, submitDisabled, ...other }
) {
  const buttonElement = formElement.querySelector(`.${submit}`);
  const inputList = [...formElement.querySelectorAll(`.${input}`)];
  toggleButtonState(inputList, buttonElement, submitDisabled);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, other);
      toggleButtonState(inputList, buttonElement, submitDisabled);
    });
  });
}

function enableValidation({ form, ...other }) {
  [...document.querySelectorAll(`.${form}`)].forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    [...formElement.querySelectorAll(".popup__fieldset")].forEach((fieldSet) => {
      setupInputVlidation(fieldSet, other);
    });
  });
}

const validationConfig = {
  form: "popup__form",
  input: "popup__input",
  inputError: "popup__input_error",
  submit: "popup__save-btn",
  submitDisabled: "popup__save-btn_disabled",
  errorActive: "popup__input-error_active",
};

enableValidation(validationConfig);
