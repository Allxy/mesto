import { initialCards } from "../utils/data.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  validationConfig,
  profileAddButton,
  profileEditButton,
} from "../utils/constants.js";
import "./index.css";

function createCard(values) {
  return new Card(
    { title: values.name, imgUrl: values.link },
    ".place-card-template",
    imagePopup.open.bind(imagePopup)
  ).generateCard();
}

const userInfo = new UserInfo(".profile__name", ".profile__status");

const imagePopup = new PopupWithImage(".popup-image");
const addCardPopup = new PopupWithForm(".popup-addcard", (values) =>
  placesSection.addItem(createCard(values))
);
const editPopup = new PopupWithForm(".popup-edit", (values) => {
  userInfo.setUserInfo(values.name, values.status);
});

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
editPopup.setEventListeners();

const placesSection = new Section(
  {
    items: initialCards,
    renderer: (item) => placesSection.addItem(createCard(item)),
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
  editPopup.setInputValues({
    status: userInfoData.status,
    name: userInfoData.name,
  });
  formEditValidator.resetValidation();
}

function clickAddButtonHandler() {
  addCardPopup.open();
  formAddValidator.resetValidation();
}

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener("click", clickAddButtonHandler);
