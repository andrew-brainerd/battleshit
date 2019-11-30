import { DEFAULT_SIZE } from '../constants/board';

const generateCells = () => {
  let cells = [];
  for (let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++) {
    cells.push({ hasHit: false, hasMiss: false });
  }
  return cells;
};

const initialState = {
  cells: generateCells()
};

export default function board (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
