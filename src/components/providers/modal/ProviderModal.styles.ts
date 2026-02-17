import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: "#3498db",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    closeText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

