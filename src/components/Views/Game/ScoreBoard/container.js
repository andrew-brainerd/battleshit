import { connect } from 'react-redux';
import { getRemainingShots, getRemainingShips, isGameOver, getGameResult } from '../../../../selectors/board';
import ScoreBoard from './ScoreBoard';

const mapStateToProps = state => ({
  numRemainingShots: getRemainingShots(state),
  numRemainingShips: getRemainingShips(state),
  isGameOver: isGameOver(state),
  gameResult: getGameResult(state)
});

export default connect(mapStateToProps)(ScoreBoard);
