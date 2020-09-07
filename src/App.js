import { connect } from 'react-redux';
import Main from './view/Main';

//state
const mapStateToProps = state => {
    return {
        menuOpen: state.menuOpener.menu,
        menuSwitch: state.menuSwitch.content,
        mobileSwitch: state.mobileSwitch.mobile,
        dehazer: state.dehazer.menu,
        //arrIndex: state.indexer.index
    };
};

//actions
const actions = {
    closeMenu: { type: "close" },
    openMenu: { type: "open" },
    openGallery: { type: "galleryOpen" },
    sliderOpen: { type: "sliderOpen" },
    aboutOpen: { type: "aboutOpen" },
    contactOpen: { type: "contactOpen" },
    makeMobile: { type: "small" },
    makeWide: { type: "wide" },
    dehaze: { type: "dehaze" },
    haze: { type: "haze" },
    // prevIndex: function (arrLength) {
    //     return { type: "decrease", arrLength: arrLength };
    // },
    // nextIndex: function (arrLength) {
    //     return { type: "increase", arrLength: arrLength };
    // }
};

const mapDispatchToProps = dispatch => {
    return {
        closeMenuAction: function () {
            return dispatch(actions.closeMenu);
        },
        openMenuAction: function () {
            return dispatch(actions.openMenu);
        },
        openGalleryAction: function () {
            return dispatch(actions.openGallery);
        },
        sliderOpenAction: function () {
            return dispatch(actions.sliderOpen);
        },
        aboutOpenAction: function () {
            return dispatch(actions.aboutOpen);
        },
        contactOpenAction: function () {
            return dispatch(actions.contactOpen);
        },
        makeMobileAction: function () {
            return dispatch(actions.makeMobile);
        },
        makeWideAction: function () {
            return dispatch(actions.makeWide);
        },
        dehazeAction: function () {
            return dispatch(actions.dehaze);
        },
        hazeAction: function () {
            return dispatch(actions.haze);
        },
        // prevIndexAction: function () {
        //     return dispatch(actions.prevIndex);;
        // },
        // nextIndexAction: function () {
        //     return dispatch(actions.nextIndex);;
        // }
    };
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default connectedComponent;