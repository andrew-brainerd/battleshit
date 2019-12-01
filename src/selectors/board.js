import { path, pathEq } from 'ramda';

export const getBoardCells = path(['board', 'cells']);

export const getRemainingShots = path(['board', 'numRemainingShots']);

export const getRemainingShips = path(['board', 'numRemainingShips']);

export const isGameOver = pathEq(['board', 'isGameOver'], true);

export const getGameResult = path(['board', 'gameResult']);
