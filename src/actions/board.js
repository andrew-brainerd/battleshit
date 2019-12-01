import { getBoardPositions } from '../utils/board';
import { getBoardCells } from '../selectors/board';

export const PLACING_SHIPS = 'PLACING_SHIPS';
export const SHIPS_PLACED = 'SHIPS_PLACED';
export const FIRE_CELL = 'FIRE_CELL';
export const HIT_CELL = 'HIT_CELL';
export const MISS_CELL = 'MISS_CELL';

export const placingShips = { type: PLACING_SHIPS };

export const hitCell = index => ({ type: HIT_CELL, index });

export const missCell = index => ({ type: MISS_CELL, index });

export const shipsPlaced = gameBoard => ({ type: SHIPS_PLACED, gameBoard });

export const placeShips = () => async (dispatch, getState) => {
  dispatch(placingShips);
  const boardCells = getBoardCells(getState());
  const gameBoard = getBoardPositions(boardCells);
  dispatch(shipsPlaced(gameBoard));
};

export const fireCell = cellIndex => async (dispatch, getState) => {
  const { hasShip } = getBoardCells(getState())[cellIndex];
  hasShip ? dispatch(hitCell(cellIndex)) : dispatch(missCell(cellIndex));
};
