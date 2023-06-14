import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import SetAlarmModal from './SetAlarmModal';
import styles from './UIcomponents/PlusButton';
import AlarmClosedModal from './AlarmClosedModal';
import QuizModal from './QuizModal';
import questions from './questions.json';

const MainScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isTimeSet, setIsTimeSet] = useState(false);
  const [isAlarmClosed, setIsAlarmClosed] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setIsQuizActive(false);
  };

  const handleTimeSelect = (time) => {
    setIsTimeSet(true);
    setIsAlarmClosed(false);
  };

  const handleAlarmClose = () => {
    setIsAlarmClosed(true);
    setIsQuizActive(true);
  };

  const handleOkButton = () => {
    setIsAlarmClosed(false);
    setIsQuizActive(false);
    setModalVisible(false);
    navigation.goBack(); // Zurück zur Hauptseite navigieren
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {!isTimeSet && (
          <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
            <Text style={styles.buttonText}>Set Alarm</Text>
          </TouchableOpacity>
        )}

        {isTimeSet && !isAlarmClosed && (
          <TouchableOpacity style={styles.button} onPress={handleAlarmClose}>
            <Text style={styles.buttonText}>Close Alarm</Text>
          </TouchableOpacity>
        )}

        <AlarmClosedModal visible={isAlarmClosed} onClose={handleOkButton} />

        <QuizModal visible={isQuizActive} onClose={handleCloseModal} questions={questions} />

        <SetAlarmModal
          visible={modalVisible}
          onClose={handleCloseModal}
          onTimeSelect={handleTimeSelect}
        />
      </View>
    </View>
  );
};

export default MainScreen;
