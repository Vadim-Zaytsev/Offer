import { Finish } from './components/Game/Finish/Win/finish.component.js';
import { Game } from './components/Game/game.component.js';
import { GAME_STATUSES, addEventListener, data } from './data/data.js';

function renderUI() {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    switch (data.gameStatus) {
        case GAME_STATUSES.IN_PROGRESS:
            const gameElement = Game();
            appElement.append(gameElement);
            break;
        case GAME_STATUSES.FINISH:
            const finishElement = Finish();
            appElement.append(finishElement);
    }
}

renderUI();

// addEventListener(renderUI);
