import { initialCards } from "../js/data.js";
import Card from "../js/Card.js";
import FormValidator from "../js/FormValidator.js";
import PopupWithImage from "../js/PopupWithImage.js";
import PopupWithForm from "../js/PopupWithForm.js";
import Section from "../js/Section.js";
import UserInfo from "../js/UserInfo.js";
import "./index.css";

const validationConfig = {
  fieldSetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  inputErrorSelector: ".popup__input_error",
  submitButtonSelector: ".popup__save-btn",
  submitButtonDisabledClass: "popup__save-btn_disabled",
  inputErrorActiveClass: "popup__input-error_active",
};

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileAddButton = document.querySelector(".profile__add-btn");

const popupEdit = document.querySelector(".popup-edit");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupEditNameInput = popupEditForm.querySelector(
  ".popup__input_type_name"
);
const popupEditStatusInput = popupEditForm.querySelector(
  ".popup__input_type_status"
);

function generateCard(values) {
  const newCard = new Card(
    { title: values.name, imgUrl: values.link },
    ".place-card-template",
    imagePopup.open.bind(imagePopup)
  ).generateCard();

  placesSection.addItem(newCard);
}

const userInfo = new UserInfo(".profile__name", ".profile__status");

const imagePopup = new PopupWithImage(".popup-image");
const addCardPopup = new PopupWithForm(".popup-addcard", generateCard);
const editPopup = new PopupWithForm(".popup-edit", (values) => {
  userInfo.setUserInfo(values.name, values.status);
});

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
editPopup.setEventListeners();

const placesSection = new Section(
  {
    items: initialCards,
    renderer: generateCard,
  },
  ".places"
);

placesSection.renderItems();

const formAddValidator = new FormValidator(
  validationConfig,
  addCardPopup.getFormElement()
);

const formEditValidator = new FormValidator(
  validationConfig,
  editPopup.getFormElement()
);

formAddValidator.enableValidation();
formEditValidator.enableValidation();

function clickEditButtonHandler() {
  editPopup.open();
  const userInfoData = userInfo.getUserInfo();
  popupEditNameInput.value = userInfoData.name;
  popupEditStatusInput.value = userInfoData.status;
  formEditValidator.resetValidation();
}

function clickAddButtonHandler() {
  addCardPopup.open();
  formAddValidator.resetValidation();
}

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener("click", clickAddButtonHandler);
