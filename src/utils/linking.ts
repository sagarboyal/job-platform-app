import { Alert, Linking } from "react-native";

export const openExternalUrl = async (url: string) => {
    try {
        const supported = await Linking.canOpenURL(url);

        if (!supported) {
            Alert.alert("Error", "Cannot open this link.");
            return;
        }

        await Linking.openURL(url);
    } catch (error) {
        Alert.alert("Error", "Something went wrong.");
    }
};
