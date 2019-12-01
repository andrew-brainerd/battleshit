import React from 'react';
import { shape, bool, number } from 'prop-types';
import styles from './ScoreBoard.module.scss';

const ScoreBoard = ({ numRemainingShots, numRemainingShips }) => {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.remainingShots}>
        Remaining Shots: <span className={styles.value}>{numRemainingShots}</span>
      </div>
      <div className={styles.remainingShips}>
        Remaining Ships: <span className={styles.value}>{numRemainingShips}</span>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  cells: shape({
    hasHit: bool,
    hasMiss: bool
  }),
  width: number
};

export default ScoreBoard;
