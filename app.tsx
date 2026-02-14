import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import RootNavigator from "./src/navigation/RootNavigation";
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  const [loaded] = useFonts(loadFonts());

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
