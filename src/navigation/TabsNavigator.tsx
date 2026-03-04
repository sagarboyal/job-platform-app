import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookmarksScreen from "../screens/bookmarks/BookmarksScreen";
import HomeScreen from "../screens/home/HomeScreen";

export type RootTabParamList = {
  Home: undefined;
  Bookmarks: undefined;
};

const Tabs = createBottomTabNavigator<RootTabParamList>();

export default function TabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tabs.Navigator>
  );
}
