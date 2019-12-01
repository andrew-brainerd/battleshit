import { keys } from 'ramda';
import { getBoardPositions } from '../utils/board';
import { getBoardCells, getRemainingShips, getRemainingShots } from '../selectors/board';

export const PLACING_SHIPS = 'PLACING_SHIPS';
export const SHIPS_PLACED = 'SHIPS_PLACED';
export const FIRE_CELL = 'FIRE_CELL';
export const HIT_CELL = 'HIT_CELL';
export const MISS_CELL = 'MISS_CELL';
export const SET_REMAINING_SHOTS = 'SET_REMAINING_SHOTS';
export const SET_REMAINING_SHIPS = 'SET_REMAINING_SHIPS';

export const placingShips = { type: PLACING_SHIPS };

export const hitCell = index => ({ type: HIT_CELL, index });

export const missCell = index => ({ type: MISS_CELL, index });

export const shipsPlaced = gameBoard => ({ type: SHIPS_PLACED, gameBoard });

export const setRemainingShots = shots => ({ type: SET_REMAINING_SHOTS, shots });

export const setRemainingShips = ships => ({ type: SET_REMAINING_SHIPS, ships });

export const placeShips = () => async (dispatch, getState) => {
  dispatch(placingShips);

  const boardCells = getBoardCells(getState());
  const gameBoard = getBoardPositions(boardCells);
  dispatch(shipsPlaced(gameBoard));
};

export const fireCell = cellIndex => async (dispatch, getState) => {
  const { hasShip } = getBoardCells(getState())[cellIndex];

  if (hasShip) {
    dispatch(hitCell(cellIndex));

    const remainingShips = getRemainingShips(getState());
    dispatch(setRemainingShips(remainingShips - 1));
  } else {
    dispatch(missCell(cellIndex));

    const remainingShots = getRemainingShots(getState());
    dispatch(setRemainingShots(remainingShots - 1));
  }
};

const fireAllCells = () => async (dispatch, getState) => {
  keys(getBoardCells(getState())).forEach((cell, c) => {
    setTimeout(() => dispatch(fireCell(c)), 500);
  });
};
