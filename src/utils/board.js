import { keys } from 'ramda';
import { DEFAULT_SIZE, ships } from '../constants/board';

const generateRandomIndex = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const generateEmptyCells = size => {
  const boardSize = size || DEFAULT_SIZE;
  const cells = {};
  for (let i = 0; i < boardSize * boardSize; i++) {
    cells[i] = ({ hasHit: false, hasMiss: false });
  }
  return cells;
};

export const getBoardPositions = gameBoard => {
  const boardSize = keys(gameBoard).length;

  ships.forEach(({ name, size }) => {
    let selectedIndex = generateRandomIndex(boardSize);
    while (gameBoard[selectedIndex].hasShip) {
      selectedIndex = generateRandomIndex(boardSize);
    }

    gameBoard[selectedIndex] = {
      ...gameBoard[selectedIndex],
      hasShip: true,
      shipName: name
    };
  });

  return gameBoard;
};
