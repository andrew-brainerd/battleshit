import { path } from 'ramda';

export const getBoardCells = path(['board', 'cells']);

export const getRemainingShots = path(['board', 'numRemainingShots']);

export const getRemainingShips = path(['board', 'numRemainingShips']);
