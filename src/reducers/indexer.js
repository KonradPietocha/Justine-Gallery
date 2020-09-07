const indexer = (state, action) => {
    if (state === undefined) {
        return { index: 0 };
    };
    switch (action.type) {
        case "prev":
            return {
                index:  state.index === 0 ? action.last : state.index - 1
            };
        case "next":
            return {
                index: state.index === action.last ? 0 : state.index + 1
            };
        default:
            return state;
    }
};

export default indexer;
