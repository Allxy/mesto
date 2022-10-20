export default class Card {
  constructor(
    { name, link, likes, owner },
    templateSelector,
    getUserId,
    handleCardClick,
    handleLikeClick,
    handleTrashClick
  ) {
    this._title = name;
    this._imgUrl = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleTrashClick = handleTrashClick;
    this._likeCount = likes.length;
    this._isLiked = Boolean(likes.find((user) => user._id === getUserId()));
    this._isOwner =  getUserId() === owner._id;
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
    this._handleTrashClick();
  }

  _clickLikeButtonHandler() {
    this._handleLikeClick(this._isLiked);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () =>
      this._clickLikeButtonHandler()
    );
    if (this._isOwner)
      this._trashButton.addEventListener("click", () =>
        this._clickTrashButtonHandler()
      );
    this._imageElement.addEventListener("click", () =>
      this._clickCardImageHandler()
    );
  }

  generateCard() {
    this._element = this._getTemplate();

    this._titleElement = this._element.querySelector(".place__title");
    this._likeCountElement = this._element.querySelector(".place__like-count");
    this._imageElement = this._element.querySelector(".place__img");
    this._likeButton = this._element.querySelector(".place__like-btn");
    this._trashButton = this._element.querySelector(".place__trash-btn");

    if (!this._isOwner) {
      this._trashButton.remove();
    }
    if (this._isLiked) {
      this.setLike(this._likeCount);
    }
    this._imageElement.src = this._imgUrl;
    this._imageElement.alt = this._title;
    this._titleElement.textContent = this._title;
    this._likeCountElement.textContent = this._likeCount;

    this._setEventListeners();

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLike(count) {
    this._likeButton.classList.add("place__like-btn_active");
    this._likeCountElement.textContent = count;
    this._isLiked = true;
  }

  removeLike(count) {
    this._likeButton.classList.remove("place__like-btn_active");
    this._likeCountElement.textContent = count;
    this._isLiked = false;
  }
}
