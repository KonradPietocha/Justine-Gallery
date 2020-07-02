import { connect } from 'react-redux';
import Main from './view/Main';

//state
const mapStateToProps = state => {
    return {
      menuOpen: state.menuOpener.menu
    };
}

//actions
const actions = {
    closeAction: { type: "close" },
    openAction: { type: "open" },
};

const mapDispatchToProps = dispatch => {
    return {
        closeMenu: function () {
            return dispatch(actions.closeAction);
        },
        openMenu: function () {
            return dispatch(actions.openAction);
        }
    };
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default connectedComponent;