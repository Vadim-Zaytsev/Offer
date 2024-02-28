import { Grid } from './Grid/grid.components.js';
import { Scores } from './Scores/scores.components.js';
import { Settings } from './Settings/settings.components.js';

export function Game() {
    const container = document.createElement('div');

    const settingsElement = Settings();
    const scoresElement = Scores();
    const gridElement = Grid();

    container.append(settingsElement, scoresElement, gridElement);

    return container;
}
