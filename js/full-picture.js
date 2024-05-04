
const pictures = document.querySelectorAll('.picture__img');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').img;
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');

const enlargePicture = () => {
  pictures.forEach((picture) => {
    picture.addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
    });
  });
};

export {enlargePicture};
