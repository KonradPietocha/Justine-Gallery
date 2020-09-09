const enlarger = (state, action) => {
    if (state === undefined) {
        return { image: null };
    };
    switch (action.type) {
        case "enlarge":
            return { image: action.url };
        case "shut":
            return { image: null };
        default:
            return state;
    }
};

export default enlarger;
