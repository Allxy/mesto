const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileAddButton = document.querySelector(".profile__add-btn");

const places = document.querySelector(".places");
const placeTemplate = document.querySelector("#place-card");

const allPopups = document.querySelectorAll(".popup");

const popupEdit = document.querySelector("#popup-edit");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupEditNameInput = popupEditForm.querySelector(
  ".popup__input_type_name"
);
const popupEditStatusInput = popupEditForm.querySelector(
  ".popup__input_type_status"
);

const popupAdd = document.querySelector("#popup-addcard");
const popupAddForm = popupAdd.querySelector(".popup__form");
const popupAddNameInput = popupAddForm.querySelector(".popup__input_type_name");
const popupAddLinkInput = popupAddForm.querySelector(".popup__input_type_link");

const popupImage = document.querySelector("#popup-image");
const popupImageImg = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__img-caption");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", escapePressHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", escapePressHandler);
}

function createNewCard(name, imgLink) {
  const cloneCard = placeTemplate.content.cloneNode(true);
  const cloneCardImg = cloneCard.querySelector(".place__img");
  const cloneCardTitle = cloneCard.querySelector(".place__title");
  const cloneCardLikeButton = cloneCard.querySelector(".place__like-btn");
  const cloneCardTrashButton = cloneCard.querySelector(".place__trash-btn");
  const cloneCardImage = cloneCard.querySelector(".place__img");

  cloneCardImg.style = `background-image: url(${imgLink})`;
  cloneCardTitle.textContent = name;

  cloneCardLikeButton.addEventListener("click", (event) =>
    cloneCardLikeButton.classList.toggle("place__like-btn_active")
  );

  cloneCardTrashButton.addEventListener("click", (event) =>
    cloneCardTrashButton.closest(".place").remove()
  );

  cloneCardImage.addEventListener("click", (event) => {
    clickCardImageHandler(name, imgLink);
  });

  return cloneCard;
}

function addCard(name, link) {
  const newCard = createNewCard(name, link);
  places.prepend(newCard);
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
  resetValidation(popupEditForm);
  openPopup(popupEdit);
}

function submitEditFormHandler(event) {
  profileName.textContent = popupEditNameInput.value;
  profileStatus.textContent = popupEditStatusInput.value;
  popupEditForm.reset();
  closePopup(popupEdit);
}

function submitAddFormHandler(event) {
  event.preventDefault();
  addCard(popupAddNameInput.value, popupAddLinkInput.value);
  event.target.reset();
  closePopup(popupAdd);
}

function clickCardImageHandler(caption, imgLink) {
  popupImageImg.setAttribute("src", imgLink);
  popupImageImg.setAttribute("alt", caption + ".");
  popupImageCaption.textContent = caption;
  openPopup(popupImage);
}

function clickAddButtonHandler() {
  popupAddForm.reset();
  resetValidation(popupAddForm);
  openPopup(popupAdd);
}

initialCards.forEach((cardData) => {
  addCard(cardData.name, cardData.link);
});

[...allPopups].forEach((popup) => {
  popup.addEventListener("click", (event) => {
    const classList = event.target.classList;
    if (
      event.target === event.currentTarget ||
      classList.contains("popup__close-btn")
    ) {
      closePopup(popup);
    }
  });
});

profileEditButton.addEventListener("click", clickEditButtonHandler);
profileAddButton.addEventListener("click", clickAddButtonHandler);

popupEditForm.addEventListener("submit", submitEditFormHandler);
popupAddForm.addEventListener("submit", submitAddFormHandler);
