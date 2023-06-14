import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import Clock from './Clock';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import TimePickerModal from './TimePickerModal';

const SetAlarmModal = ({ visible, onClose, onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(new Date().toLocaleTimeString());
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  const alarmSound = useRef(null);

  useEffect(() => {
    alarmSound.current = new Sound(require('./alarm.mp3'), (error) => {
      if (error) {
        console.log('Error loading sound: ', error);
      } else {
        alarmSound.current.setNumberOfLoops(-1); // Set loop to -1 for infinite looping
      }
    });

    return () => {
      if (alarmSound.current) {
        alarmSound.current.stop();
        alarmSound.current.release();
      }
    };
  }, []);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setTimePickerVisible(false);
  };

  const handleSaveTime = () => {
    onTimeSelect(selectedTime);
    setIsAlarmActive(true);
    onClose();
    alarmSound.current.play();
  };

  const handleStopAlarm = () => {
    setIsAlarmActive(false);
    alarmSound.current.stop();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <FastImage source={require('./alarmclock.gif')} style={styles.gif} />
        <Text style={styles.modalText}>Set your alarm:</Text>
        <TouchableOpacity
          onPress={() => setTimePickerVisible(true)}
          style={styles.timeButton}
        >
          <Text style={styles.timeButtonText}>Select Time</Text>
        </TouchableOpacity>

        <Clock time={selectedTime} />
        <TouchableOpacity style={styles.modalButton} onPress={handleSaveTime}>
          <Text style={styles.modalButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={onClose}>
          <Text style={styles.modalButtonText}>Close</Text>
        </TouchableOpacity>

        {isAlarmActive && (
          <TouchableOpacity style={styles.closeAlarmButton} onPress={handleStopAlarm}>
            <Text style={styles.closeAlarmButtonText}>Close Alarm</Text>
          </TouchableOpacity>
        )}

        <TimePickerModal
          visible={timePickerVisible}
          onClose={() => setTimePickerVisible(false)}
          onTimeSelect={handleTimeChange}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  gif: {
    width: 200,
    height: 200,
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  timeButton: {
    backgroundColor: '#20B2aa',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  timeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
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
  closeAlarmButton: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeAlarmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SetAlarmModal;
