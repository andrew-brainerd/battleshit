import { DEFAULT_SIZE } from '../constants/board';
import { HIT_CELL, MISS_CELL } from '../actions/board';

const generateCells = () => {
  let cells = {};
  for (let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++) {
    cells[i] = ({ hasHit: false, hasMiss: false });
  }
  return cells;
};

const initialState = {
  cells: generateCells()
};

export default function board (state = initialState, action) {
  switch (action.type) {
    case HIT_CELL:
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.index]: {
            hasHit: true
          }
        }
      };
    case MISS_CELL:
      return {
        ...state,
        cells: {
          ...state.cells,
          [action.index]: {
            hasMiss: true
          }
        }
      };
    default:
      return state;
  }
};
