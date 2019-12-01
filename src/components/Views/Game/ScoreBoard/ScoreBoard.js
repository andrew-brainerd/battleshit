import React from 'react';
import { number, bool, string, func } from 'prop-types';
import styles from './ScoreBoard.module.scss';
import { WIN } from '../../../../constants/game';
import Button from '../../../common/Button/Button';

const ScoreBoard = ({
  numRemainingShots,
  numRemainingShips,
  isGameOver,
  gameResult,
  startNewGame
}) => {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.remainingShots}>
        Remaining Shots: <span className={styles.value}>{numRemainingShots}</span>
      </div>
      <div className={styles.remainingShips}>
        Remaining Ships: <span className={styles.value}>{numRemainingShips}</span>
      </div>
      {isGameOver &&
        <div className={styles.gameOverContainer}>
          <div className={styles.gameOver}>Game Over</div>
          <div className={[
            styles.gameResult,
            gameResult === WIN ? styles.win : styles.lose
          ].join(' ')}>
            You {gameResult}
          </div>
            <Button
              className={styles.playAgain}
              text={'Play Again'}
              onClick={() => {
                console.log('Play Again');
                startNewGame();
              }}
            />
        </div>}
    </div>
  );
};

ScoreBoard.propTypes = {
  numRemainingShots: number.isRequired,
  numRemainingShips: number.isRequired,
  isGameOver: bool,
  gameResult: string,
  startNewGame: func.isRequired
};

export default ScoreBoard;
