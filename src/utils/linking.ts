import { Alert, Linking } from "react-native";
import { showError } from "./toast";

export const openExternalUrl = async (url: string) => {
    if (!url || url.trim() === "") {
        console.log("entered");
        showError("Failed to load provider");
        return;
    }
    try {
        const supported = await Linking.canOpenURL(url);

        if (!supported) {
            Alert.alert("Error", "Cannot open this link.");
            return;
        }

        await Linking.openURL(url);
    } catch (error) {
        showError("Failed to load provider");
        //Alert.alert("Error", "Something went wrong.");
    }
};
