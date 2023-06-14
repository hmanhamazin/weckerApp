import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Clock = ({ time }) => {
  const formatTime = (time) => {
    // Hier können Sie die Logik zur Formatierung der Uhrzeit im Clock-Schema implementieren
    // Beispiel: Konvertierung von "HH:mm" in "HH:mm AM/PM"
    const [hours, minutes] = time.split(':');
    const formattedHours = parseInt(hours, 10) % 12;
    const period = parseInt(hours, 10) >= 12 ? 'PM' : 'AM';
    return `${formattedHours}:${minutes} ${period}`;
  };

  return <Text style={styles.clockText}>{formatTime(time)}</Text>;
};

const styles = StyleSheet.create({
  clockText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'monospace',
  },
});

export default Clock;
