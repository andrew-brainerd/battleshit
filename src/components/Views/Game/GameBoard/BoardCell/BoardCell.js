import React from 'react';
import { number, bool, func } from 'prop-types';
import styles from './BoardCell.module.scss';

const BoardCell = ({ index, size, hasMiss, hasHit, hasMissedHit, fire }) => {
  return (
    <div
      className={[
        styles.boardCell,
        hasHit ? styles.hit : '',
        hasMiss ? styles.miss : '',
        hasMissedHit ? styles.missedHit : ''
      ].join(' ')}
      style={{ height: size, width: size }}
      onClick={() => !hasHit && !hasMiss && !hasMissedHit && fire(index)}
    >
    </div>
  );
};

BoardCell.propTypes = {
  index: number.isRequired,
  size: number.isRequired,
  hasHit: bool,
  hasMiss: bool,
  hasMissedHit: bool,
  fire: func.isRequired
};

export default BoardCell;
