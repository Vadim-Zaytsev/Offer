export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    FINISH: 'finish',
};

export const data = {
    scores: {
        catchesCount: 0,
        missesCount: 0,
    },
    coords: {
        x: 0,
        y: 0,
    },
    settings: {
        gridSize: {
            columnsCount: 3,
            rowsCount: 3,
        },
        endGameConditions: {
            maximumMissesCount: 3,
            pointsToWin: 3,
        },
    },

    gameStatus: GAME_STATUSES.IN_PROGRESS,
};

let subscriber = null;

export function addEventListener(observer) {
    subscriber = observer;
}

function jumpOfferToRandomPosition() {
    let newX, newY;

    do {
        newX = generateRandomInt(data.settings.gridSize.columnsCount);
        newY = generateRandomInt(data.settings.gridSize.rowsCount);
    } while (data.coords.x === newX && data.coords.y === newY);

    data.coords.x = newX;
    data.coords.y = newY;
}

function generateRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function catchOffer() {
    clearInterval(jumpIntervalId);
    data.scores.catchesCount++;

    if (
        data.scores.catchesCount === data.settings.endGameConditions.pointsToWin
    ) {
        data.gameStatus = GAME_STATUSES.FINISH;
    } else {
        jumpOfferToRandomPosition();
        runJumpInterval();
    }

    subscriber();
}

function missOffer() {
    data.scores.missesCount++;
    if (
        data.scores.missesCount ===
        data.settings.endGameConditions.maximumMissesCount
    ) {
        data.gameStatus = GAME_STATUSES.FINISH;
    } else {
        jumpOfferToRandomPosition();
    }

    subscriber();
}

let jumpIntervalId;

function runJumpInterval() {
    jumpIntervalId = setInterval(missOffer, 2000);
}

runJumpInterval();
