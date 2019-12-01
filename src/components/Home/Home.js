import React from 'react';
import { oneOf } from 'prop-types';
import memoize from 'lodash.memoize';
import { views, MENU_VIEW, GAME_VIEW } from '../../constants/game';
import Menu from '../Views/Menu/container';
import Game from '../Views/Game/Game';
import styles from './Home.module.scss';

const viewComponents = memoize(() => ({
  [MENU_VIEW]: <Menu />,
  [GAME_VIEW]: <Game />
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
