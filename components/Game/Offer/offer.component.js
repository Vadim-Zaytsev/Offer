import { catchOffer } from '../../../data/data.js';

export function Offer() {
    const offerElement = document.createElement('img');

    offerElement.src = 'assets/images/offer.png';

    offerElement.addEventListener('click', () => {
        catchOffer();
    });

    return offerElement;
}
