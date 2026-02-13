import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";

type RootStackParamList = {
  Welcome: undefined;
  MainTabs: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const goToDashboard = () => {
    navigation.replace("MainTabs");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>
        Welcome to the App 🚀
      </Text>

      <Button title="Go to Dashboard" onPress={goToDashboard} />
    </View>
  );
};

export default WelcomeScreen;
