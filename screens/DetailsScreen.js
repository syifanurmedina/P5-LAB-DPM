import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Information</Text>
      <Text style={styles.info}>Nama: Syifa Nur Medina</Text>
      <Text style={styles.info}>NPM: 223510709</Text>
      <Text style={styles.info}>Kelas: 5B</Text>
      <Button title="Kembali" buttonStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5DEB3', // Warna coklat muda
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000', // Warna maroon
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#8B0000', // Warna maroon
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8B0000', // Warna maroon
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default DetailsScreen;
