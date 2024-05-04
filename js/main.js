import { createOffers } from './data.js';
import { renderOffers } from './render.js';
import { enlargePicture } from './full-picture.js';

const offers = createOffers(20);

renderOffers(offers);
enlargePicture();
