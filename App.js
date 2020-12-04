import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header.js';
import Chapters from './src/components/Chapters';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Chapters />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
