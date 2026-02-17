import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./ProviderModal.styles";

const ProviderModal = ({ isVisible, onClose }: any) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text>Provider Details Here</Text>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ProviderModal;
