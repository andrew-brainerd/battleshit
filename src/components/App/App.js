import React from 'react';
import { object } from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import Header from '../common/Header/container';
import { HOME_ROUTE } from '../../constants/routes';
import Home from '../Home/container';
import styles from './App.module.scss';

const App = ({ history }) => (
  <div className={styles.battleshit}>
    <ConnectedRouter history={history}>
      <>
        <Header />
        <div className={styles.content}>
          <Switch>
            <Route path={HOME_ROUTE} exact component={Home} />
          </Switch>
        </div>
      </>
    </ConnectedRouter >
  </div>
);

App.propTypes = {
  history: object.isRequired
};

export default App;
