import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import RootNavigator from "./src/navigation/RootNavigation";
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  const [loaded] = useFonts(loadFonts());

  if (!loaded) return null;
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
}
