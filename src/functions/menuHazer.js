export const menuHazer = (dehazer, hazeAction) => {
    switch (dehazer) {
        case true:
            return hazeAction();
        case false:
            return;
        default:
            return;
    };
};