import Toast from "react-native-toast-message";

export const showSuccess = (message: string, title = "Success") => {
    Toast.show({
        type: "success",
        text1: title,
        text2: message,
        position: "bottom",
        visibilityTime: 3000,
    });
};

export const showError = (message: string, title = "Error") => {
    Toast.show({
        type: "error",
        text1: title,
        text2: message,
        position: "bottom",
        visibilityTime: 3000,
    });
};

export const showInfo = (message: string, title = "Info") => {
    Toast.show({
        type: "info",
        text1: title,
        text2: message,
        position: "bottom",
        visibilityTime: 3000,
    });
};
