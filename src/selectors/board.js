import { path } from 'ramda';
import { createSelector } from 'reselect';

export const getBoardCells = path(['board', 'cells']);

export const getCellByIndex = index => createSelector(getBoardCells,
  boardCells => boardCells[index]
);
