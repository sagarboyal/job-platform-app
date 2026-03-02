import { COLORS } from "@/src/theme/colors";
import { FONTS } from "@/src/theme/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: COLORS.background,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.gray100,
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.gray200,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.gray900,
    },
    content: {
        flex: 1,
        backgroundColor: COLORS.background,
    }
});
