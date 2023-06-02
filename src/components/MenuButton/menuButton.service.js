export const switchMenu = item => {
    switch (item) {
        case "Galeria":
            return "galleryOpen";
        case "Slajdy":
            return "sliderOpen";
        case "O mnie":
            return "aboutOpen";
        case "Kontakt":
            return "contactOpen";
        default:
            return "galleryOpen";
    };
};
