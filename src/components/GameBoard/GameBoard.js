import React from 'react';
import { arrayOf, shape, bool, number } from 'prop-types';
import BoardCell from './BoardCell/BoardCell';
import styles from './GameBoard.module.scss';

const GameBoard = ({ cells }) => {
  const size = cells.length * 5;
  return (
    <div className={styles.gameBoard} style={{ height: size, width: size }}>
      {cells.map((cell, c) => <BoardCell key={c} {...cell} />)}
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
