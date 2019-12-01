import { GAME_VIEW } from '../constants/game';
import { placeShips } from './board';

export const STARTING_NEW_GAME = 'STARTING_NEW_GAME';
export const NEW_GAME_STARTED = 'NEW_GAME_STARTED';
export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

export const startingNewGame = { type: STARTING_NEW_GAME };

export const newGameStarted = { type: NEW_GAME_STARTED };

export const setCurrentView = view => ({ type: SET_CURRENT_VIEW, view });

export const startNewGame = () => async dispatch => {
  dispatch(startingNewGame);
  await dispatch(placeShips());
  dispatch(setCurrentView(GAME_VIEW));
};
