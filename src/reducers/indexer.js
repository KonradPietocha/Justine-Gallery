const indexer = (state, action) => {
    if (state === undefined) {
        return { index: 0 };
    }
    const lastIndex = action.arrLength - 1;
    switch (action.type) {
        case "increase":
            return {
                index: state === lastIndex ? 0 : state + 1
            };
        case "decrease":
            return {
                index: state === 0 ? lastIndex : state - 1
            };
        default:
            return state;
    }
};

export default indexer;
