import ProviderCard from "@/src/components/providers/card/ProviderCard";
import { IMAGES } from "@/src/theme/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreen.styles";
import { Providers } from "./data";

const HomeScreen = () => {
  const [providerList, setProviderList] = useState(Providers);

  const renderProviders = ({ item }: any) => {
    return <ProviderCard data={item} />;
  };
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.header}>
        <ImageBackground
          source={IMAGES.waves}
          style={styles.headerTop}
          resizeMode="cover"
        >
          <Text style={styles.headerTopTitle}>Good Morning</Text>
          <Text style={styles.headerTopSubTitle}>Santu Mondal</Text>
        </ImageBackground>
        <View style={styles.headerBottom}>
          <Ionicons name="search" size={24} style={styles.headerBottomIcon} />
          <TextInput
            placeholder="Search job here.."
            style={styles.headerBottomText}
          />
        </View>
      </View>

      <View style={styles.providerListWrapper}>
        <View style={styles.providerHeaderRow}>
          <Text style={styles.providerTitle}>Government Portals</Text>

          <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <Text style={styles.providerListLink}>View all</Text>
          </Pressable>
        </View>

        <FlatList
          data={providerList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProviders}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.providerList}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
