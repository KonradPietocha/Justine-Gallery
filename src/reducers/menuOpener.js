const menuOpener = (state, action) => {
    if (state === undefined) {
        return { menu: true };
    }
    switch (action.type) {
        case "close":
            return { menu: false };
        case "open":
            return { menu: true };
        default:
            return state;
    }
};

export default menuOpener;
