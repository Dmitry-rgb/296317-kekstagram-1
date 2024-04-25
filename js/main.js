<<<<<<< HEAD
import {createOffers} from './data.js';
import {pictures} from './rendering.js';

// eslint-disable-next-line no-console
console.log(createOffers(20));
// eslint-disable-next-line no-console
console.log(pictures);
=======
import { createOffers } from './data.js';
import { renderOffers } from './render.js';

const offers = createOffers(20);

renderOffers(offers);
>>>>>>> 8fe540ddb737bb6f7cc6d9403e6fa61d01cc1dc0
