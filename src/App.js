import { connect } from 'react-redux';
import Main from './view/Main';
import { getState } from './redux/state';

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