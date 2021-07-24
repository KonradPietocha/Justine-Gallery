import { connect } from 'react-redux';
import Main from './view/Main';
import { getState } from './redux/state';

//state
const mapStateToProps = state => {
    return getState(state);
};

//actions
const mapDispatchToProps = dispatch => {
    return {
        openMenuAction: action => {
            return dispatch({ type: action });
        },
        menuSwitchAction: action => {
            return dispatch({ type: action });
        },
        makeMobileAction: action => {
            return dispatch({ type: action });
        },
        hazeAction: action => {
            return dispatch({ type: action });
        },
        changeIndexAction: (action, lastInd) => {
            return dispatch({ type: action, last: lastInd });
        },
        enlargeImageAction: (action, url) => {
            return dispatch({ type: action, url: url });
        }
    };
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default connectedComponent;