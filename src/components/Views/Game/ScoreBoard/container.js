import { connect } from 'react-redux';
import { getRemainingShots, getRemainingShips } from '../../../../selectors/board';
import ScoreBoard from './ScoreBoard';

const mapStateToProps = state => ({
  numRemainingShots: getRemainingShots(state),
  numRemainingShips: getRemainingShips(state)
});

export default connect(mapStateToProps)(ScoreBoard);
