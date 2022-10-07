export default class Card {
  constructor({title, imgUrl}, templateSelector, handleCardClick) {
    this._title = title;
    this._imgUrl = imgUrl;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".place")
      .cloneNode(true);
  }

  _clickCardImageHandler() {
    this._handleCardClick(this._title, this._imgUrl);
  }

  _clickTrashButtonHandler() {
    this._element.remove();
    this._element = null;
  }

  _clickLikeButtonHandler() {
    this._likeButton.classList.toggle("place__like-btn_active");
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".place__like-btn");
    this._trashButton = this._element.querySelector(".place__trash-btn");
    this._imageElement = this._element.querySelector(".place__img");

    this._likeButton.addEventListener("click", () =>
      this._clickLikeButtonHandler()
    );
    this._trashButton.addEventListener("click", () =>
      this._clickTrashButtonHandler()
    );
    this._imageElement.addEventListener("click", () =>
      this._clickCardImageHandler()
    );
  }

  generateCard() {
    this._element = this._getTemplate();

    this._imageElement = this._element.querySelector(".place__img");
    this._titleElement = this._element.querySelector(".place__title");

    this._imageElement.src = this._imgUrl;
    this._imageElement.alt = this._title;
    this._titleElement.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}
