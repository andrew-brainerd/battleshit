import { keys } from 'ramda';
import { getBoardPositions } from '../utils/board';
import {
  getBoardCells,
  deriveRemainingBoardCells,
  isGameOver,
  getRemainingShips,
  getRemainingShots
} from '../selectors/board';
import { WIN, LOSE } from '../constants/game';

export const PLACING_SHIPS = 'PLACING_SHIPS';
export const SHIPS_PLACED = 'SHIPS_PLACED';
export const FIRE_CELL = 'FIRE_CELL';
export const HIT_CELL = 'HIT_CELL';
export const MISS_CELL = 'MISS_CELL';
export const SET_REMAINING_SHOTS = 'SET_REMAINING_SHOTS';
export const SET_REMAINING_SHIPS = 'SET_REMAINING_SHIPS';
export const SET_GAME_OVER = 'SET_GAME_OVER';
export const CLEAR_BOARD = 'CLEAR_BOARD';

export const placingShips = { type: PLACING_SHIPS };

export const hitCell = index => ({ type: HIT_CELL, index });

export const missCell = index => ({ type: MISS_CELL, index });

export const shipsPlaced = gameBoard => ({ type: SHIPS_PLACED, gameBoard });

export const setRemainingShots = shots => ({ type: SET_REMAINING_SHOTS, shots });

export const setRemainingShips = ships => ({ type: SET_REMAINING_SHIPS, ships });

export const setGameOver = result => ({ type: SET_GAME_OVER, result });

export const clearBoard = ({ type: CLEAR_BOARD });

export const placeShips = () => async (dispatch, getState) => {
  dispatch(placingShips);

  const boardCells = getBoardCells(getState());
  const gameBoard = getBoardPositions(boardCells);
  dispatch(shipsPlaced(gameBoard));
};

export const fireCell = cellIndex => async (dispatch, getState) => {
  if (!isGameOver(getState())) {
    const { hasShip } = getBoardCells(getState())[cellIndex];

    if (hasShip) {
      dispatch(hitCell(cellIndex));

      const remainingShips = getRemainingShips(getState()) - 1;
      if (remainingShips === 0) {
        dispatch(setRemainingShips(remainingShips));
        dispatch(setGameOver(WIN));
        dispatch(fireAllCells());
      } else {
        dispatch(setRemainingShips(remainingShips));
      }
    } else {
      dispatch(missCell(cellIndex));

      const remainingShots = getRemainingShots(getState()) - 1;
      if (remainingShots === 0) {
        dispatch(setRemainingShots(remainingShots));
        dispatch(setGameOver(LOSE));
        dispatch(fireAllCells());
      } else {
        dispatch(setRemainingShots(remainingShots));
      }
    }
  } else {
    const { hasShip } = getBoardCells(getState())[cellIndex];
    hasShip ? dispatch(hitCell(cellIndex)) : dispatch(missCell(cellIndex));
  }
};

const fireAllCells = () => async (dispatch, getState) => {
  keys(deriveRemainingBoardCells(getState())).forEach(cell =>
    setTimeout(() => dispatch(fireCell(parseInt(cell))), 500)
  );
};
