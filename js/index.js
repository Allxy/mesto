import { initialCards } from "./data.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import constants from "./constants.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

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

const imagePopup = new PopupWithImage(constants.popupImageSelector);
const addCardPopup = new PopupWithForm(
  constants.popupAddSelector,
  generateCard
);
const editPopup = new PopupWithForm(constants.popupEditSelector, (values) => {
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
  constants.placesSelector
);

placesSection.renderItems();

const formAddValidator = new FormValidator(
  constants.validationConfig,
  addCardPopup.getFormElement()
);

const formEditValidator = new FormValidator(
  constants.validationConfig,
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

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener(
  "click",
  addCardPopup.open.bind(addCardPopup)
);
