import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ProviderModal.styles";

type Provider = {
  name: string;
  fullName: string;
  description: string;
  url?: string;
};

type Props = {
  isVisible: boolean;
  onClose: () => void;
  data: Provider;
};

const ProviderModal: React.FC<Props> = ({ isVisible, onClose, data }) => {
  const slideAnim = useRef(new Animated.Value(400)).current;
  const backdropAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 280,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(backdropAnim, {
          toValue: 1,
          duration: 280,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      slideAnim.setValue(400);
      backdropAnim.setValue(0);
    }
  }, [isVisible]);

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 400,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(backdropAnim, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start(onClose);
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={closeModal}
    >
      {/* Backdrop */}
      <Animated.View
        style={[styles.modalBackground, { opacity: backdropAnim }]}
      >
        {/* tap outside to close */}
        <Pressable style={{ flex: 1, width: "100%" }} onPress={closeModal} />

        {/* Bottom Sheet */}
        <Animated.View
          style={[
            styles.modalContent,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <SafeAreaView edges={["bottom"]}>
            {/* Drag Indicator */}
            <View style={styles.dragBar} />

            {/* Header */}
            <View style={styles.header}>
              <Pressable
                onPress={closeModal}
                style={({ pressed }) => [
                  styles.headerIconWrapper,
                  pressed && styles.pressed,
                ]}
              >
                <Ionicons
                  name="arrow-back"
                  size={20}
                  style={styles.headerIcon}
                />
                <Text style={styles.headerIconText}>Back</Text>
              </Pressable>

              <Text style={styles.headerTitle}>{data.name}</Text>
            </View>

            {/* Body */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.body}>
                <Text style={styles.bodyTitle}>{data.fullName}</Text>
                <Text style={styles.bodySubtitle}>About</Text>
                <Text style={styles.bodyDescription}>{data.description}</Text>
              </View>
            </ScrollView>

            {/* Footer */}
            {data.url && (
              <View style={styles.footer}>
                <Pressable
                  onPress={() => Linking.openURL(data.url!)}
                  style={({ pressed }) => [
                    styles.button,
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={styles.buttonText}>Visit Official Website</Text>
                </Pressable>
              </View>
            )}
          </SafeAreaView>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

export default ProviderModal;
