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
import Api from "../components/Api.js";

function createCard(values) {
  const newCard = new Card(
    values,
    Boolean(values.likes.find((user) => user._id === userInfo.getId())),
    userInfo.getId() === values.owner._id,
    ".place-card-template",
    imagePopup.open.bind(imagePopup),
    (isLiked, cardId) => {
      if (isLiked) {
        api
          .removeLike(cardId)
          .then((data) => newCard.removeLike(data.likes.length));
      } else {
        api.setLike(cardId).then((data) => newCard.setLike(data.likes.length));
      }
    }
  );

  return newCard.generateCard();
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-52/",
  headers: {
    authorization: "47016496-8e67-44e3-804c-b828c4f61e69",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__about",
  ".profile__avatar"
);

const userPromise = api.getUser().then((data) => {
  userInfo.setUserInfo(data.name, data.about);
  userInfo.setAvatar(data.avatar);
  userInfo.setId(data._id);
});

const imagePopup = new PopupWithImage(".popup-image");
const addCardPopup = new PopupWithForm(".popup-addcard", (values) =>
  api.addCard(values).then((data) => placesSection.addItem(createCard(data)))
);
const editPopup = new PopupWithForm(".popup-edit", (values) => {
  api
    .patchUser(values)
    .then((data) => userInfo.setUserInfo(data.name, data.about));
});

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
editPopup.setEventListeners();

const placesSection = new Section(
  (item) => placesSection.addItem(createCard(item), true),
  ".places"
);

userPromise.then(() =>
  api.getCards().then((data) => {
    placesSection.addItems(
      data.map((item) => createCard(item)),
      true
    );
  })
);

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
  editPopup.setInputValues(userInfo.getUserInfo());
  formEditValidator.resetValidation();
}

function clickAddButtonHandler() {
  addCardPopup.open();
  formAddValidator.resetValidation();
}

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener("click", clickAddButtonHandler);
