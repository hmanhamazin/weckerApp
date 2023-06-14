import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal,Image } from 'react-native';
import modalStyles from './UIcomponents/Modal';

const AlarmClosedModal = ({ visible, onClose }) => {
  const [showPsychModal, setShowPsychModal] = useState(false);
  const [showThirdTimeModal, setShowThirdTimeModal] = useState(false);

  const handleOKButtonPress = () => {
    setShowPsychModal(true);
  };

  const handlePsychOKButtonPress = () => {
    setShowPsychModal(false);
    setShowThirdTimeModal(true);
  };

  const handleThirdTimeOKButtonPress = () => {
    setShowThirdTimeModal(false);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={modalStyles.modalContainer}>
        <Text style={modalStyles.modalText}>Close Annoying Alarm</Text>
        <TouchableOpacity style={modalStyles.modalButton} onPress={handleOKButtonPress}>
          <Text style={modalStyles.modalButtonText}>OK</Text>
        </TouchableOpacity>

        <Modal visible={showPsychModal} animationType="slide" transparent={true} onRequestClose={onClose}>
  <View style={modalStyles.modalContainer}>
    <Text style={modalStyles.modalText}>PSYCH !!!</Text>
    <Image source={require('./got-em-excited.gif')} style={modalStyles.gif} />
    <TouchableOpacity style={modalStyles.modalButton} onPress={handlePsychOKButtonPress}>
      <Text style={modalStyles.modalButtonText}>OK</Text>
    </TouchableOpacity>
  </View>
</Modal>

        <Modal visible={showThirdTimeModal} animationType="slide" transparent={true} onRequestClose={onClose}>
          <View style={modalStyles.modalContainer}>
            <Text style={modalStyles.modalText}>Third time the charm</Text>
            <TouchableOpacity style={modalStyles.modalButton} onPress={handleThirdTimeOKButtonPress}>
              <Text style={modalStyles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </Modal>
  );
};

export default AlarmClosedModal;
