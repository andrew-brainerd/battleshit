import React from 'react';
import { func } from 'prop-types';
import GameBoard from '../GameBoard/container';
import styles from './Home.module.scss';

const Home = ({ navTo }) => (
  <div className={styles.home}>
    <GameBoard />
  </div>
);

Home.propTypes = {
  navTo: func.isRequired
};

export default Home;
