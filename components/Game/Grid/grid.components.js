import { data } from '../../../data/data.js';
import { Offer } from '../Offer/offer.component.js';

export function Grid() {
    const container = document.createElement('div');

    for (let y = 0; y < data.settings.gridSize.rowsCount; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < data.settings.gridSize.columnsCount; x++) {
            const cellElement = document.createElement('td');

            if (x === data.coords.x && y === data.coords.y) {
                cellElement.append(Offer());
            }

            rowElement.append(cellElement);
        }

        container.append(rowElement);
    }

    return container;
}
