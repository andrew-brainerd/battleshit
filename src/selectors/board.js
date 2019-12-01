import { omit, path, pathEq } from 'ramda';
import { createSelector } from 'reselect';

export const getBoardCells = path(['board', 'cells']);

export const getFiredCells = path(['board', 'fired']);

export const getRemainingShots = path(['board', 'numRemainingShots']);

export const getRemainingShips = path(['board', 'numRemainingShips']);

export const isGameOver = pathEq(['board', 'isGameOver'], true);

export const getGameResult = path(['board', 'gameResult']);

export const deriveRemainingBoardCells = createSelector([getBoardCells, getFiredCells],
  (boardCells, firedCells) => omit(firedCells, boardCells)
);
