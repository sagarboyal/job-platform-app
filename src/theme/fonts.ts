export const FONTS = {
    thin: "Outfit-Thin",
    light: "Outfit-Light",
    regular: "Outfit-Regular",
    medium: "Outfit-Medium",
    semibold: "Outfit-SemiBold",
    bold: "Outfit-Bold",
    extrabold: "Outfit-ExtraBold",
    black: "Outfit-Black",
} as const;

export const FONT_FILES = {
    "Outfit-Thin": require("../../assets/fonts/Outfit-Thin.ttf"),
    "Outfit-Light": require("../../assets/fonts/Outfit-Light.ttf"),
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-SemiBold": require("../../assets/fonts/Outfit-SemiBold.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-ExtraBold": require("../../assets/fonts/Outfit-ExtraBold.ttf"),
    "Outfit-Black": require("../../assets/fonts/Outfit-Black.ttf"),
} as const;


export const loadFonts = () => FONT_FILES;
