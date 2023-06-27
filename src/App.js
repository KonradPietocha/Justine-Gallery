import { connect } from 'react-redux';
import { getState } from './redux/state';
import Main from './components/Main/Main';

//state
const mapStateToProps = state => {
    return getState(state);
};

//actions
const mapDispatchToProps = dispatch => ({
    dispatchAction: (dispatchParams) => dispatch(dispatchParams)
})

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default connectedComponent;
