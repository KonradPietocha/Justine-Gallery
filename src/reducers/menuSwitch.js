const menuSwitch = (state, action) => {
    if (state === undefined) {
        return { content: "gallery" };
    }
    switch (action.type) {
        case "galleryOpen":
            return { content: "gallery" };
        case "sliderOpen":
            return { content: "slider" };
        case "aboutOpen":
            return { content: "about" };
        case "contactOpen":
            return { content: "contact" };
        default:
            return state;
    }
};

export default menuSwitch;
