import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Modal, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const PlusButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.plusButton} onPress={onPress}>
      <MaterialIcons name="add" size={24} color="grey" />
    </TouchableOpacity>
  );
};

const TileWithButtons = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.tile}>
      <PlusButton onPress={handleButtonPress} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text>Modal-Inhalt</Text>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text>Schließen</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TileWithButtons;
