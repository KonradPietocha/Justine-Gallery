const mobileSwitch = (state, action) => {
    if (state === undefined) {
        return { mobile: true };
    }
    switch (action.type) {
        case "wide":
            return { mobile: false };
        case "small":
            return { mobile: true };
        default:
            return state;
    }
};

export default mobileSwitch;
