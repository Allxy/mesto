// Поля профиля
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

// Кавер для всех попапов
const cover = document.querySelector(".cover");

// Кнопка закрыть для всех попапов
const closeButtons = document.querySelectorAll(".popup__close-btn");

// Попап редактирования профиля
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileEditPopup = document.getElementById("profile-edit-popup");
const profileEditName = document.getElementById("profile-edit-name");
const profileEditStatus = document.getElementById("profile-edit-status");

const likes = document.querySelectorAll(".place__like-btn");

function closePopup( popup ) {
  popup.classList.remove("popup_opened");
  cover.classList.remove("cover_opened");
}

function openPopup( popup ) {
  popup.classList.add("popup_opened");
  cover.classList.add("cover_opened");
}

// Закрытие попапа при нажатии снаружи
cover.addEventListener("click", (ev) => {
  if(ev.target.classList.contains("cover")) {
    ev.target.classList.remove("cover_opened")

    document.querySelectorAll(".popup_opened").forEach((el) =>{
      el.classList.remove("popup_opened");
    });
  }
});

// Обработка закрытия всех попапов
closeButtons.forEach((el) => {
  el.addEventListener("click", () => {
    closePopup(el.parentElement);
  });
});

// Кнопка редактировать инфо
profileEditButton.addEventListener("click", (el) => {
  profileEditName.value = profileName.textContent;
  profileEditStatus.value = profileStatus.textContent;
  openPopup(profileEditPopup);
});

// Кнопка сохранить попапа редактированя профиля
profileEditPopup.addEventListener("submit", (el)=>{
  el.preventDefault();
  profileName.textContent = profileEditName.value;
  profileStatus.textContent = profileEditStatus.value;
  closePopup(profileEditPopup);
});

likes.forEach((like) => {
  like.addEventListener( "click", (ev) => {
    like.classList.toggle("place__like-btn_active");
  })
});