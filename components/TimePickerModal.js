import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Slider } from 'react-native';

const TimePickerModal = ({ visible, onClose, onTimeSelect }) => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleTimeSelect = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    onTimeSelect(time);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.pickerContainer}>
          <Text style={styles.modalText}>Select Time:</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Hours: {selectedHour}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={23}
              step={1}
              value={selectedHour}
              onValueChange={(value) => setSelectedHour(value)}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Minutes: {selectedMinute}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={59}
              step={1}
              value={selectedMinute}
              onValueChange={(value) => setSelectedMinute(value)}
            />
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={handleTimeSelect}>
            <Text style={styles.modalButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: 200,
  },
  modalButton: {
    alignItems: 'center',
    backgroundColor: '#20B2aa',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default TimePickerModal;
