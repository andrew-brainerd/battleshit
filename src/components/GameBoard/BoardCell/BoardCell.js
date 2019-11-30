import React from 'react';
import { number, bool } from 'prop-types';
import styles from './BoardCell.module.scss';

const BoardCell = ({ size, hasMiss, hasHit }) => {
  return (
    <div
      className={[
        styles.boardCell,
        hasHit ? styles.hit : '',
        hasMiss ? styles.miss : ''
      ].join(' ')}
      style={{ height: size, width: size }}
    >
    </div>
  );
};

BoardCell.propTypes = {
  size: number,
  hasHit: bool,
  hasMiss: bool
};

export default BoardCell;
