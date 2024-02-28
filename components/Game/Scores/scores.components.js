import { data } from '../../../data/data.js';

export function Scores() {
    const container = document.createElement('div');

    container.append(
        `Catches: ${data.scores.catchesCount}; misses: ${data.scores.missesCount}`
    );

    return container;
}
