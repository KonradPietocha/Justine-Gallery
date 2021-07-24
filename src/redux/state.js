export const getState = state => {
    return {
        menuOpen: state.menuOpener.menu,
        menuSwitch: state.menuSwitch.content,
        mobileSwitch: state.mobileSwitch.mobile,
        dehazer: state.dehazer.menu,
        indexer: state.indexer.index,
        enlarger: state.enlarger.image
    };
};
