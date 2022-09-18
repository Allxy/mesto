import { initialCards } from "./data.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileAddButton = document.querySelector(".profile__add-btn");

const places = document.querySelector(".places");

const allPopups = document.querySelectorAll(".popup");

const popupEdit = document.querySelector(".popup-edit");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupEditNameInput = popupEditForm.querySelector(
  ".popup__input_type_name"
);
const popupEditStatusInput = popupEditForm.querySelector(
  ".popup__input_type_status"
);

const popupAdd = document.querySelector(".popup-addcard");
const popupAddForm = popupAdd.querySelector(".popup__form");
const popupAddNameInput = popupAddForm.querySelector(".popup__input_type_name");
const popupAddLinkInput = popupAddForm.querySelector(".popup__input_type_link");

const popupImage = document.querySelector(".popup-image");
const popupImageImg = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__img-caption");

const validationConfig = {
  fieldSetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  inputErrorSelector: ".popup__input_error",
  submitButtonSelector: ".popup__save-btn",
  submitButtonDisabledClass: "popup__save-btn_disabled",
  inputErrorActiveClass: "popup__input-error_active",
};

const formAddValidator = new FormValidator(validationConfig, popupAddForm);
const formEditValidator = new FormValidator(validationConfig, popupEditForm);

formAddValidator.enableValidation();
formEditValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", escapePressHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", escapePressHandler);
}

function openImagePopupHandler(title, imgUrl) {
  popupImageImg.setAttribute("src", imgUrl);
  popupImageImg.setAttribute("alt", title + ".");
  popupImageCaption.textContent = title;
  openPopup(popupImage);
}

function createCard(title, imgUrl) {
  const newCard = new Card(
    { title, imgUrl },
    ".place-card-template",
    openImagePopupHandler
  );

  return newCard.generateCard();
}

function insertCard(card, toEnd = true) {
  if(toEnd) {
    places.prepend(card);
  } else {
    places.append(card);
  }
}

function escapePressHandler(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    } else {
      document.removeEventListener("keydown", escapePressHandler);
    }
  }
}

function clickEditButtonHandler() {
  popupEditNameInput.value = profileName.textContent;
  popupEditStatusInput.value = profileStatus.textContent;
  formEditValidator.resetValidation();
  openPopup(popupEdit);
}

function submitEditFormHandler(event) {
  profileName.textContent = popupEditNameInput.value;
  profileStatus.textContent = popupEditStatusInput.value;
  closePopup(popupEdit);
}

function submitAddFormHandler(event) {
  event.preventDefault();
  const card = createCard(popupAddNameInput.value, popupAddLinkInput.value);
  insertCard(card)
  closePopup(popupAdd);
}

function clickAddButtonHandler() {
  popupAddForm.reset();
  formAddValidator.resetValidation();
  openPopup(popupAdd);
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData.name, cardData.link);
  insertCard(card)
});

allPopups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close-btn")
    ) {
      closePopup(popup);
    }
  });
});

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener("click", clickAddButtonHandler);

popupEditForm.addEventListener("submit", submitEditFormHandler);
popupAddForm.addEventListener("submit", submitAddFormHandler);
