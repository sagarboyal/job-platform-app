import { COLORS } from "@/src/theme/colors";
import { FONTS } from "@/src/theme/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        width: 220,
        margin: 10,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,

        elevation: 4,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    hearderIcon: {
        width: 40,
        height: 40,
        borderRadius: 22.5,
        marginRight: 10,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,

        elevation: 4,

        backgroundColor: "#fff",
    },
    headerTitle: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        flex: 1,
    },

    body: {
        gap: 4,
    },
    bodyTitle: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.gray700,
    },
    bodyDescription: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.gray500,
    },

    redirectButton: {
        borderRadius: 10,
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2
    },
    redirectButtonText: {
        color: COLORS.primary,
        fontFamily: FONTS.bold,
        fontSize: 14,
    },
    pressed: {
        opacity: 0.5
    }
});
