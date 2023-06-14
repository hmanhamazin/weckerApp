import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#20B2aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFE4B5',
    borderRadius: 80,
    paddingVertical: 19,
    paddingHorizontal: 26,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FF4500',
    lineHeight: 24,
    fontFamily: 'Eina01',
    textTransform: 'none',
  },
  gifContainer: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    marginTop: 50,
  },
  gif: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerAlarm: {
    backgroundColor: '#FF0000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: '#20B2aa',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  
  
});

export default styles;
