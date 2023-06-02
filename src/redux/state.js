export const getState = state => {
    return {
        menuSwitch: state.menuSwitch?.content,
        mobileSwitch: state.mobileSwitch?.mobile,
        dehazer: state.dehazer?.menu,
        indexer: state.indexer?.index,
        enlarger: state.enlarger?.image
    };
};
