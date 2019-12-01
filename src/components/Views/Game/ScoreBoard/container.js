import { connect } from 'react-redux';
import {
  getRemainingShots,
  getRemainingShips,
  isGameOver,
  getGameResult 
} from '../../../../selectors/board';
import { startNewGame } from '../../../../actions/game';
import ScoreBoard from './ScoreBoard';

const mapStateToProps = state => ({
  numRemainingShots: getRemainingShots(state),
  numRemainingShips: getRemainingShips(state),
  isGameOver: isGameOver(state),
  gameResult: getGameResult(state)
});

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(startNewGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
