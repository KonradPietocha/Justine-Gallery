export const slidePictures = (action, lastImage, picturesIndex, setPicturesIndex) => {
    if (action === "prev") {
        return setPicturesIndex(
            picturesIndex === 0 ? lastImage : picturesIndex - 1
        );
    };
    if (action === "next") {
        return setPicturesIndex(
            picturesIndex === lastImage ? 0 : picturesIndex + 1
        );
    }
};
