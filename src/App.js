import { connect } from 'react-redux';
import Main from './view/Main';

//state
const mapStateToProps = state => {
    return {
        menuOpen: state.menuOpener.menu,
        menuSwitch: state.menuSwitch.content,
        mobileSwitch: state.mobileSwitch.mobile,
        dehazer: state.dehazer.menu,
        indexer: state.indexer.index,
        enlarger: state.enlarger.image
    };
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