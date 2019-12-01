import { DEFAULT_SIZE, ships } from '../constants/board';
import {
  SHIPS_PLACED,
  HIT_CELL,
  MISS_CELL,
  SET_REMAINING_SHOTS,
  SET_REMAINING_SHIPS
} from '../actions/board';

const generateCells = size => {
  const boardSize = size || DEFAULT_SIZE;
  const cells = {};
  for (let i = 0; i < boardSize * boardSize; i++) {
    cells[i] = ({ hasHit: false, hasMiss: false });
  }
  return cells;
};

const initialState = {
  cells: generateCells(6),
  numRemainingShips: ships.length,
  numRemainingShots: 10
};

export default function board(state = initialState, action) {
  switch (action.type) {
    case SHIPS_PLACED:
      return {
        ...state,
        cells: action.gameBoard
      };
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
    case SET_REMAINING_SHOTS:
      return {
        ...state,
        numRemainingShots: action.shots
      };
    case SET_REMAINING_SHIPS:
      return {
        ...state,
        numRemainingShips: action.ships
      };
    default:
      return state;
  }
};
