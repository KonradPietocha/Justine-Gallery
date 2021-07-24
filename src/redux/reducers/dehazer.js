const dehazer = (state, action) => {
    if (state === undefined) {
        return { menu: false };
    }
    switch (action.type) {
        case "haze":
            return { menu: false };
        case "dehaze":
            return { menu: true };
        default:
            return state;
    }
};

export default dehazer;
