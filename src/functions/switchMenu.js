export const switchMenu = props => {
    switch (props.item) {
        case "Galeria":
            return props.openGalleryAction;
        case "Slider":
            return props.sliderOpenAction;
        case "O mnie":
            return props.aboutOpenAction;
        case "Kontakt":
            return props.contactOpenAction;
        default:
            return props.openGalleryAction;
    };
};
