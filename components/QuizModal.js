import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import modalStyles from './UIcomponents/Modal';

const QuizModal = ({ visible, onClose, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
  }, []);

  const handleNextQuestion = () => {
    if (currentAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
      setUserAnswers([...userAnswers, currentAnswer]);
      setIsAnswerCorrect(true);
      handleCloseModal();
    } else {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestionIndex(randomIndex);
      setCurrentAnswer('');
      setIsAnswerCorrect(false);
    }
  };

  const handleCloseModal = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setCurrentAnswer('');
    setIsAnswerCorrect(true);
    onClose();
  };

  if (!visible || currentQuestionIndex >= questions.length) {
    return null;
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={handleCloseModal}>
      <View style={modalStyles.modalContainer}>
        <Text style={modalStyles.modalText}>{questions[currentQuestionIndex].question}</Text>
        {!isAnswerCorrect && (
          <Text style={modalStyles.errorText}>Wrong answer. Try again!</Text>
        )}
        <TextInput
          style={[modalStyles.input, { width: 300 }, { backgroundColor: 'white' }]}
          onChangeText={(text) => setCurrentAnswer(text)}
          value={currentAnswer}
        />
        <TouchableOpacity style={modalStyles.modalButton} onPress={handleNextQuestion}>
          <Text style={modalStyles.modalButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default QuizModal;
