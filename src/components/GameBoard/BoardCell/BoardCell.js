import React from 'react';
import { number, bool, func } from 'prop-types';
import styles from './BoardCell.module.scss';

const BoardCell = ({ index, size, hasMiss, hasHit, fire }) => {
  return (
    <div
      className={[
        styles.boardCell,
        hasHit ? styles.hit : '',
        hasMiss ? styles.miss : ''
      ].join(' ')}
      style={{ height: size, width: size }}
      onClick={() => !hasHit && !hasMiss && fire(index)}
    >
    </div>
  );
};

BoardCell.propTypes = {
  size: number.isRequired,
  hasHit: bool,
  hasMiss: bool,
  fire: func.isRequired
};

export default BoardCell;
