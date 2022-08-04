const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileEditButton = document.querySelector(".profile__edit-btn");

const popup = document.querySelector(".popup");
const popupEditForm = popup.querySelector(".popup__form");
const popupCloseButton = popup.querySelector(".popup__close-btn");
const popupNameInput = popup.querySelector(".popup__input_type_name");
const popupStatusInput = popup.querySelector(".popup__input_type_status");

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function clickOutCallback(event) {
  if (event.target.classList.contains("popup_opened")) {
    closePopup();
  }
}

function clickEditCallback() {
  popupNameInput.value = profileName.textContent;
  popupStatusInput.value = profileStatus.textContent;
  openPopup();
}

function formSubmitCallback(event) {
  event.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  closePopup();
}

popup.addEventListener("click", clickOutCallback);
popupCloseButton.addEventListener("click", closePopup);
profileEditButton.addEventListener("click", clickEditCallback);
popupEditForm.addEventListener("submit", formSubmitCallback);
