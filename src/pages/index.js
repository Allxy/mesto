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
  profileAvatarButton,
} from "../utils/constants.js";
import "./index.css";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

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
  ".profile__avatar-image"
);

const imagePopup = new PopupWithImage(".popup-image");
const addCardPopup = new PopupWithForm(".popup-addcard", (values) =>
  api.addCard(values).then((data) => placesSection.addItem(data))
);
const editPopup = new PopupWithForm(".popup-edit", (values) =>
  api
    .patchUser(values)
    .then((data) => userInfo.setUserInfo(data.name, data.about))
);
const avatarPopup = new PopupWithForm(".popup-avatar", (values) =>
  api.setAvatar({ avatar: values.link }).then(userInfo.setAvatar(values.link))
);
const deleteCardPopup = new PopupWithConfirm(
  ".popup-delete",
  ({ id, callback }) =>
    api.removeCard(id).then(() => {
      callback();
    })
);

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
editPopup.setEventListeners();
deleteCardPopup.setEventListeners();
avatarPopup.setEventListeners();

const placesSection = new Section((values) => {
  const newCard = new Card(
    values,
    ".place-card-template",
    userInfo.getId.bind(userInfo),
    imagePopup.open.bind(imagePopup),
    (isLiked) => {
      if (isLiked) {
        api
          .removeLike(values._id)
          .then((data) => newCard.removeLike(data.likes.length))
          .catch((err) => console.error(err.message));
      } else {
        api
          .setLike(values._id)
          .then((data) => newCard.setLike(data.likes.length))
          .catch((err) => console.error(err.message));
      }
    },
    () => {
      deleteCardPopup.open({
        id: values._id,
        callback: newCard.deleteCard.bind(newCard),
      });
    }
  );
  return newCard.generateCard();
}, ".places");

Promise.all([api.getUser(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setAvatar(userData.avatar);
    userInfo.setId(userData._id);

    placesSection.addItems(cards, true);
  })
  .catch((err) => console.error(err.message));

const formAddValidator = new FormValidator(
  validationConfig,
  addCardPopup.getFormElement()
);
const formEditValidator = new FormValidator(
  validationConfig,
  editPopup.getFormElement()
);
const formAvatarValidator = new FormValidator(
  validationConfig,
  avatarPopup.getFormElement()
);

formAddValidator.enableValidation();
formEditValidator.enableValidation();
formAvatarValidator.enableValidation();

function clickEditButtonHandler() {
  editPopup.open();
  editPopup.setInputValues(userInfo.getUserInfo());
  formEditValidator.resetValidation();
}

function clickAddButtonHandler() {
  addCardPopup.open();
  formAddValidator.resetValidation();
}

function clickAvatarImageHandler() {
  avatarPopup.open();
  formAvatarValidator.resetValidation();
}

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener("click", clickAddButtonHandler);
profileAvatarButton.addEventListener("click", clickAvatarImageHandler);
