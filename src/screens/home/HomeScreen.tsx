import ProviderCard from "@/src/components/providers/card/ProviderCard";
import api from "@/src/services/api";
import { COLORS } from "@/src/theme/colors";
import { IMAGES } from "@/src/theme/images";
import { showError } from "@/src/utils/toast";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [providerList, setProviderList] = useState([]);

  const renderProviders = ({ item }: any) => {
    return <ProviderCard data={item} />;
  };

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      try {
        const response = await api.get("/v1/provider");
        setProviderList(response.data);
      } catch (error) {
        console.log("error:", error);
        showError("Something went wrong.");
      } finally {
        setLoading(true);
      }
    };

    fetchProviders();
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={"dark-content"} />
      {loading && <ActivityIndicator size="large" color={COLORS.primary} />}
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
          keyExtractor={(item) => item.id}
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
