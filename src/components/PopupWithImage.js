import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imageElement = this._popup.querySelector(".popup__image");
    this._captionElement = this._popup.querySelector(".popup__img-caption");
  }

  open(caption, imgUrl) {
    super.open();
    this._imageElement.setAttribute("src", imgUrl);
    this._imageElement.setAttribute("alt", caption + ".");
    this._captionElement.textContent = caption;
  }
}
