import { MENU_VIEW } from '../constants/game';
import { SET_CURRENT_VIEW } from '../actions/game';

const initialState = {
  currentView: MENU_VIEW
};

export default function game (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return {
        ...state,
        currentView: action.view
      };
    default:
      return state;
  }
};
