import { connect } from 'react-redux';
import { compose } from 'ramda';
import withSizes from 'react-sizes';
import { getBoardCells } from '../../../../selectors/board';
import GameBoard from './GameBoard';

const mapStateToProps = state => ({
  cells: getBoardCells(state)
});

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 750
});

export default compose(
  withSizes(mapSizesToProps),
  connect(mapStateToProps)
)(GameBoard);
