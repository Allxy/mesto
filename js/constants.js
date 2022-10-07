function getElement(selector, parentElement) {
  if (parentElement.querySelector) {
    return parentElement.querySelector(selector);
  }
  return document.querySelector(selector);
}

export default {
  popupSelector: ".popup",
  popupCloseButtonSelector: ".popup__close-btn",
  popupFormSelector: ".popup__form",
  popupTextElementSelector: ".popup__input",
  popupSubmitButtonSelector: ".popup__save-btn",

  popupImageSelector: ".popup-image",
  popupImageImgSelector: ".popup__image",
  popupImageCaptionSelector: ".popup__img-caption",

  popupAddSelector: ".popup-addcard",
  popupEditSelector: ".popup-edit",

  placesSelector: ".places",

  validationConfig: {
    fieldSetSelector: ".popup__fieldset",
    inputSelector: ".popup__input",
    inputErrorSelector: ".popup__input_error",
    submitButtonSelector: ".popup__save-btn",
    submitButtonDisabledClass: "popup__save-btn_disabled",
    inputErrorActiveClass: "popup__input-error_active",
  },
};
