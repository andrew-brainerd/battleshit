import React from 'react';
import { arrayOf, shape, bool, number } from 'prop-types';
import BoardCell from './BoardCell/BoardCell';
import styles from './GameBoard.module.scss';

const GameBoard = ({ cells }) => {
  const boardSize = cells.length * 5;
  const cellSize = boardSize / Math.sqrt(cells.length);

  return (
    <div className={styles.gameBoard} style={{ height: boardSize, width: boardSize }}>
      {cells.map((cell, c) =>
        <BoardCell
          key={c}
          size={cellSize}
          {...cell}
        />
      )}
    </div>
  );
};

GameBoard.propTypes = {
  cells: arrayOf(shape({
    hasHit: bool,
    hasMiss: bool
  })),
  width: number
};

export default GameBoard;
