import React, { useState } from 'react';
import { func } from 'prop-types';
import Button from '../common/Button/Button';
import styles from './Menu.module.scss';

const Menu = ({ startNewGame }) => {
  const [newGameButtonText, setNewGameButtonText] = useState('New Game');
  const [newGameDisabled, setNewGameDisabled] = useState(false);
  return (
  <div className={styles.menu}>
    <Button
      className={styles.newGame}
      text={newGameButtonText}
      disabled={newGameDisabled}
      onClick={() => {
        setNewGameDisabled(true);
        setNewGameButtonText('Loading...');
        startNewGame();
      }}
    />
  </div>
);
    }

Menu.propTypes = {
  startNewGame: func.isRequired
};

export default Menu;
