import { generateEmptyCells } from '../utils/board';
import { DEFAULT_SIZE, DEFAULT_SHOTS, ships } from '../constants/board';
import {
  SHIPS_PLACED,
  HIT_CELL,
  MISS_CELL,
  SET_REMAINING_SHOTS,
  SET_REMAINING_SHIPS,
  SET_GAME_OVER,
  CLEAR_BOARD
} from '../actions/board';

const initialState = {
  cells: {},
  numRemainingShips: ships.length,
  numRemainingShots: DEFAULT_SHOTS,
  isGameOver: false
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
    case SET_GAME_OVER:
      return {
        ...state,
        isGameOver: true,
        gameResult: action.result
      };
    case CLEAR_BOARD:
      return {
        ...state,
        cells: generateEmptyCells(DEFAULT_SIZE),
        numRemainingShips: ships.length,
        numRemainingShots: DEFAULT_SHOTS,
        isGameOver: false,
        gameResult: null
      }
    default:
      return state;
  }
};
