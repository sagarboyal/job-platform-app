import { COLORS } from "@/src/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  StatusBar,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreen.styles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={COLORS.gray500} style={styles.searchIcon} />
          <TextInput
            placeholder="Search job here.."
            style={styles.searchInput}
            placeholderTextColor={COLORS.gray400}
          />
        </View>
      </View>
      <View style={styles.content}>
        {/* Blank content for now */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
