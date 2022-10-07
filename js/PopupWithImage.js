import constants from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imageElement = this._popup.querySelector(
      constants.popupImageImgSelector
    );
    this._captionElement = this._popup.querySelector(
      constants.popupImageCaptionSelector
    );
  }

  open(caption, imgUrl) {
    super.open();
    this._imageElement.setAttribute("src", imgUrl);
    this._imageElement.setAttribute("alt", caption + ".");
    this._captionElement.textContent = caption;
  }
}
