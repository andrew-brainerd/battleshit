import { connect } from 'react-redux';
import { navTo } from '../../../actions/routing';
import { getPathname } from '../../../selectors/routing';
import Header from './Header';

const mapStateToProps = state => ({
  pathname: getPathname(state)
});

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
