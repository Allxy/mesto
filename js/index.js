const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileEditButton = document.querySelector(".profile__edit-btn");

const places = document.querySelector(".places");
const placeTemplate = document.querySelector("#place-card");

const popup = document.querySelector(".popup");
const popupEditForm = popup.querySelector(".popup__form");
const popupCloseButton = popup.querySelector(".popup__close-btn");
const popupNameInput = popup.querySelector(".popup__input_type_name");
const popupStatusInput = popup.querySelector(".popup__input_type_status");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function createNewCard(name, imgLink) {
  const clone = placeTemplate.content.cloneNode(true);
  clone.querySelector(".place__img").style = `background-image: url(${imgLink})`;
  clone.querySelector(".place__title").textContent = name;
  return clone;
}

function clickEditCallback() {
  popupNameInput.value = profileName.textContent;
  popupStatusInput.value = profileStatus.textContent;
  openPopup();
}

function clickOutCallback(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup();
  }
}

function formSubmitCallback(event) {
  event.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  closePopup();
}

initialCards.forEach(el => {
  places.append(createNewCard(el.name, el.link))
})

profileEditButton.addEventListener("click", clickEditCallback);

popup.addEventListener("click", clickOutCallback);
popupCloseButton.addEventListener("click", closePopup);
popupEditForm.addEventListener("submit", formSubmitCallback);
