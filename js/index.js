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
  document.addEventListener("keydown", escapePressCallback);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", escapePressCallback);
}

function createNewCard(name, imgLink) {
  const clone = placeTemplate.content.cloneNode(true);
  const cloneImg = clone.querySelector(".place__img");
  const cloneTitle = clone.querySelector(".place__title");
  const cloneLikeButton = clone.querySelector(".place__like-btn");
  const cloneTrashButton = clone.querySelector(".place__trash-btn");
  const cloneImage = clone.querySelector(".place__img");

  cloneImg.style = `background-image: url(${imgLink})`;
  cloneTitle.textContent = name;

  cloneLikeButton.addEventListener("click", (event) =>
    cloneLikeButton.classList.toggle("place__like-btn_active")
  );

  cloneTrashButton.addEventListener("click", (event) =>
    cloneTrashButton.closest(".place").remove()
  );

  cloneImage.addEventListener("click", (event) => {
    popupImageCallback(imgLink, cloneTitle.textContent);
  });

  return clone;
}

function escapePressCallback(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    } else {
      document.removeEventListener("keydown", escapePressCallback);
    }
  }
}

function clickEditCallback() {
  popupEditNameInput.value = profileName.textContent;
  popupEditStatusInput.value = profileStatus.textContent;
  openPopup(popupEdit);
}

function popupEditFormCallback(event) {
  console.log("dsadsa")
  profileName.textContent = popupEditNameInput.value;
  profileStatus.textContent = popupEditStatusInput.value;
  closePopup(popupEdit);
}

function popupAddFormCallback(event) {
  event.preventDefault();
  const card = createNewCard(popupAddNameInput.value, popupAddLinkInput.value);
  event.target.reset();
  places.prepend(card);
  closePopup(popupAdd);
}

function popupImageCallback(imgLink, caption) {
  popupImageImg.setAttribute("src", imgLink);
  popupImageImg.setAttribute("alt", caption + ".");
  popupImageCaption.textContent = caption;
  openPopup(popupImage);
}

function popupAddCallback() {
  popupAddNameInput.value = "";
  popupAddLinkInput.value = "";
  openPopup(popupAdd);
}

initialCards.forEach((el) => {
  places.prepend(createNewCard(el.name, el.link));
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

profileEditButton.addEventListener("click", clickEditCallback);
profileAddButton.addEventListener("click", popupAddCallback);

popupEditForm.addEventListener("submit", popupEditFormCallback);
popupAddForm.addEventListener("submit", popupAddFormCallback);
