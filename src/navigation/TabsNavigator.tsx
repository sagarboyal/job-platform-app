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
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tabs.Navigator>
  );
}
