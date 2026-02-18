import { COLORS } from "@/src/theme/colors";
import { FONTS } from "@/src/theme/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "flex-end",
    },

    modalContent: {
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16,
        maxHeight: "85%",
    },

    dragBar: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#ccc",
        alignSelf: "center",
        marginBottom: 12,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },


    headerIconWrapper: {
        position: "absolute",
        left: 0,
        flexDirection: "row",
        alignItems: "center",
    },


    headerIcon: {
        color: COLORS.primary,
    },

    headerIconText: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        marginLeft: 2,
        color: COLORS.primary,
    },

    headerTitle: {
        textAlign: "center",
        fontFamily: FONTS.bold,
        fontSize: 18,
    },


    body: {
        marginTop: 10,
    },

    bodyTitle: {
        fontFamily: FONTS.medium,
        fontSize: 18,
    },

    bodySubtitle: {
        fontFamily: FONTS.light,
        fontSize: 14,
        marginTop: 6,
    },

    bodyDescription: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.gray800,
        marginTop: 4,
        lineHeight: 22,
    },

    footer: {
        marginTop: 15,
        alignItems: "flex-end",
    },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
    },

    buttonText: {
        fontFamily: FONTS.medium,
        color: COLORS.white,
    },

    pressed: {
        opacity: 0.5,
    },
});
