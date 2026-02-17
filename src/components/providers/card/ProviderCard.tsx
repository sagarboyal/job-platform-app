import { COLORS } from "@/src/theme/colors";
import { IMAGES } from "@/src/theme/images";
import { openExternalUrl } from "@/src/utils/linking";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import ProviderModal from "../modal/ProviderModal";
import { styles } from "./ProviderCard.styles";

const ProviderCard = ({ data }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Pressable style={styles.card} onPress={() => setModalVisible(true)}>
      <View style={styles.header}>
        <Image
          source={IMAGES.ncsLogo}
          style={styles.hearderIcon}
          resizeMode="cover"
        />
        <Text style={styles.headerTitle} numberOfLines={1}>
          {data.name}
        </Text>
        <Pressable
          style={styles.redirectButton}
          onPress={() => openExternalUrl(data.url)}
        >
          <Text style={styles.redirectButtonText}>Visit</Text>
          <Feather name="arrow-up-right" size={14} color={COLORS.white} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle} numberOfLines={2}>
          {data.fullName}
        </Text>
        <Text style={styles.bodyDescription} numberOfLines={3}>
          {data.description}
        </Text>
      </View>
      <ProviderModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </Pressable>
  );
};

export default ProviderCard;
