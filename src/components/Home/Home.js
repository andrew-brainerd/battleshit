import React from 'react';
import { oneOf } from 'prop-types';
import memoize from 'lodash.memoize';
import { MENU_VIEW, GAME_BOARD_VIEW } from '../../constants/game';
import { views } from '../../constants/game';
import Menu from '../Menu/container';
import GameBoard from '../GameBoard/container';
import styles from './Home.module.scss';

const viewComponents = memoize(() => ({
  [MENU_VIEW]: <Menu />,
  [GAME_BOARD_VIEW]: <GameBoard />
}))();

const Home = ({ currentView }) => (
  <div className={styles.home}>
    {viewComponents[currentView]}
  </div>
);

Home.propTypes = {
  currentView: oneOf(views)
};

export default Home;
