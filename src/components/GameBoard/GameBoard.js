import React from 'react';
import { shape, bool, number } from 'prop-types';
import { values } from 'ramda';
import BoardCell from './BoardCell/container';
import styles from './GameBoard.module.scss';

const GameBoard = ({ cells }) => {
  const cellList = values(cells);
  const cellCount = cellList.length;
  const boardSize = cellCount * 5;
  const cellSize = boardSize / Math.sqrt(cellCount);

  return (
    <div
      className={styles.gameBoard}
      style={{ height: boardSize, width: boardSize }}
    >
      {cellList.map((cell, c) =>
        <BoardCell
          key={c}
          index={c}
          size={cellSize}
          {...cell}
        />
      )}
    </div>
  );
};

GameBoard.propTypes = {
  cells: shape({
    hasHit: bool,
    hasMiss: bool
  }),
  width: number
};

export default GameBoard;
