import React from 'react';
import { bool } from 'prop-types';
import styles from './BoardCell.module.scss';

const BoardCell = ({ hasMiss, hasHit }) => {
  return (
    <div className={styles.boardCell}>
    </div>
  );
};

BoardCell.propTypes = {
  hasHit: bool,
  hasMiss: bool
};

export default BoardCell;
