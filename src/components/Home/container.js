import { connect } from 'react-redux';
import { getCurrentView } from '../../selectors/game';
import Home from './Home';

const mapStateToProps = state => ({
  currentView: getCurrentView(state)
});

export default connect(mapStateToProps)(Home);
