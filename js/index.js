// Поля профиля
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileEditButton = document.querySelector(".profile__edit-btn");

const popup = document.querySelector(".popup");
const popupEditForm = popup.querySelector(".popup__form");
const popupCloseButton = popup.querySelector(".popup__close-btn");
const popupNameInput = popup.querySelector(".popup__input_type_name");
const popupStatusInput = popup.querySelector(".popup__input_type_status");

// Закрытие попапа при нажатии снаружи
popup.addEventListener("click", (ev) => {
  if(ev.target.classList.contains("popup_opened")) {
    ev.target.classList.remove("popup_opened")
  }
});

// Обработка закрытия попапа
popupCloseButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

// Кнопка редактировать инфо
profileEditButton.addEventListener("click", (ev) => {
  popupNameInput.value = profileName.textContent;
  popupStatusInput.value = profileStatus.textContent;
  popup.classList.add("popup_opened");
});

// Кнопка сохранить попапа редактированя профиля
popupEditForm.addEventListener("submit", (ev)=>{
  ev.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  popup.classList.remove("popup_opened");
});