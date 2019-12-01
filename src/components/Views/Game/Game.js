import React from 'react';
import styles from './Game.module.scss';
import GameBoard from './GameBoard/container';
import ScoreBoard from './ScoreBoard/container';

const Game = () => (
  <div className={styles.game}>
    <GameBoard />
    <ScoreBoard />
  </div>
);

export default Game;
