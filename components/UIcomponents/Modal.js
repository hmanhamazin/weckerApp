import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    modalText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom: 20,
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
    errorText: {
        position: 'absolute',
        bottom: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  });
  
  export default modalStyles;