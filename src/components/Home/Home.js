import React from 'react';
import { func } from 'prop-types';
import styles from './Home.module.scss';

const Home = ({ navTo }) => (
  <div className={styles.home}>
    Landing Page
  </div>
);

Home.propTypes = {
  navTo: func.isRequired
};

export default Home;
