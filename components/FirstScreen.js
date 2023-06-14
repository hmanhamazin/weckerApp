import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import buttonStyles from './UIcomponents/ButtonComponents.js';

const FirstScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('Main');
  };

  const [containerHeight, setContainerHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateContainerHeight = () => {
      setContainerHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateContainerHeight);

    return () => {
      Dimensions.removeEventListener('change', updateContainerHeight);
    };
  }, []);

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <FastImage
        source={require('./wecker.gif')}
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hier stehst du garantiert auf</Text>
      </View>
      <Button
        title="Start"
        onPress={handleButtonPress}
        style={buttonStyles.button} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gif: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default FirstScreen;
