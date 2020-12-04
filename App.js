import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import chapters from './assets/chapters.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(chapters).map((no) => (
        <>
          <Text style={styles.chapter}>{no}</Text>
          <Text style={styles.chapter}>{chapters[no]}</Text>
        </>
      ))}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapter: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 40,
    marginRight: 40,
  },
});
