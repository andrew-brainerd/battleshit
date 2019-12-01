import { connect } from 'react-redux';
import { fireCell } from '../../../../../actions/board';
import BoardCell from './BoardCell';

const mapDispatchToProps = dispatch => ({
  fire: index => dispatch(fireCell(index))
});

export default connect(null, mapDispatchToProps)(BoardCell);
