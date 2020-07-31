const menuSwitch = (state, action) => {
    if (state === undefined) {
        return { content: "Galeria" };
    }
    switch (action.type) {
        case "galleryOpen":
            return { content: "Galeria" };
        case "sliderOpen":
            return { content: "Slajdy" };
        case "aboutOpen":
            return { content: "O mnie" };
        case "contactOpen":
            return { content: "Kontakt" };
        default:
            return state;
    }
};

export default menuSwitch;
