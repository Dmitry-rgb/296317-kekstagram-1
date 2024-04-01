import {createOffers} from './data.js';

const templatePicture = document.querySelector('#picture').content;
const templatePictureItem = templatePicture.querySelector('.picture');
const templatePictureImg = templatePicture.querySelector('.picture__img');
const templatePictureComments = templatePicture.querySelector('.picture__comments');
const templatePictureLikes = templatePicture.querySelector('.picture__likes');

const pictures = document.querySelector('.pictures');
const items = createOffers(25);
const fragment = document.createDocumentFragment();
for (let i = 0; i < items.length; i++) {
  templatePictureImg.src = items[i].url;
  templatePictureLikes.textContent = items[i].likes;
  templatePictureComments.textContent = items[i].comments.length;
  const element = templatePictureItem.cloneNode(true);
  fragment.appendChild(element);
}
pictures.appendChild(fragment);


export {pictures};

// второй способ перебора
/* items.forEach((item) => {
  const element = templatePictureItem.cloneNode(true);
  templatePictureImg.src = item.url;
  templatePictureLikes.textContent = item.likes;
  templatePictureComments.textContent = item.comments.length;
  fragment.appendChild(element);
});
pictures.appendChild(fragment); */
