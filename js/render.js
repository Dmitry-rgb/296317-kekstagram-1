const templateElement = document.querySelector('#picture').content;

const pictures = document.querySelector('.pictures');

const renderOffers = (offers) => {

  const fragment = document.createDocumentFragment();
  offers.forEach((offer) => {
    const element = templateElement.cloneNode(true);
    element.querySelector('.picture__img').src = offer.url;
    element.querySelector('.picture__likes').textContent = offer.likes;
    element.querySelector('.picture__comments').textContent = offer.comments.length;
    fragment.appendChild(element);
  });
  pictures.appendChild(fragment);
};

export { renderOffers };
