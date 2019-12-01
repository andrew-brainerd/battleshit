import { connect } from 'react-redux';
import { getBoardCells } from '../../../../selectors/board';
import GameBoard from './GameBoard';

const mapStateToProps = state => ({
  cells: getBoardCells(state)
});

export default connect(mapStateToProps)(GameBoard);
