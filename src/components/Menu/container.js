import { connect } from 'react-redux';
import { startNewGame } from '../../actions/game';
import Menu from './Menu';

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(startNewGame())
});

export default connect(null, mapDispatchToProps)(Menu);
