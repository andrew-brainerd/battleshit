import { getCellByIndex } from '../selectors/board';

export const FIRE_CELL = 'FIRE_CELL';
export const HIT_CELL = 'HIT_CELL';
export const MISS_CELL = 'MISS_CELL';

export const hitCell = index => ({ type: HIT_CELL, index });

export const missCell = index => ({ type: MISS_CELL, index });

export const fireCell = (cellIndex, playerNum = 1) => async dispatch => {
  const { hasShip } = getCellByIndex(cellIndex, playerNum);

  console.log(`Fire Cell ${cellIndex} for Player ${playerNum}`);

  if (hasShip) {
    dispatch(hitCell(cellIndex));
  } else {
    dispatch(missCell(cellIndex));
  }
};
