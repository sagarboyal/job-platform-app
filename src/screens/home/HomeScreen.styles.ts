import { COLORS } from "@/src/theme/colors";
import { FONTS } from "@/src/theme/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
        height: 227,
    },
    headerTop: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 28,
        overflow: "hidden",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerTopTitle: {
        fontFamily: FONTS.medium,
        color: COLORS.background,
        fontSize: 20,
        alignSelf: 'center'
    },
    headerTopSubTitle: {
        fontFamily: FONTS.medium,
        color: COLORS.background,
        fontSize: 26,
        alignSelf: 'center'
    },
    headerBottom: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        height: 58,
        backgroundColor: COLORS.background,
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 28,
        borderRadius: 50
    },
    headerBottomIcon: {
        width: 24,
        height: 24,
        marginLeft: 20,
        color: COLORS.gray400
    },
    headerBottomText: {
        fontFamily: FONTS.regular,
        color: COLORS.gray500,
        marginLeft: 12,
        fontSize: 16
    },

    providerListWrapper: {
        marginTop: 20,
    },
    providerHeaderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    providerTitle: {
        fontFamily: FONTS.bold,
        fontSize: 18,
    },
    providerListLink: {
        fontFamily: FONTS.bold,
        color: COLORS.primary,
    },
    providerList: {
        paddingLeft: 5,
        paddingRight: 10,
    },
    pressed: {
        opacity: 0.6,
    },
});