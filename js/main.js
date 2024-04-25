import { createOffers } from './data.js';
import { renderOffers } from './render.js';

const offers = createOffers(20);

renderOffers(offers);
