import { keys } from 'ramda';
import { ships } from '../constants/board';

const generateRandomIndex = max => {
  return Math.floor(Math.random() * Math.floor(max));
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
