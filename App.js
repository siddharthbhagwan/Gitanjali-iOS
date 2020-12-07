import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
	const [isLoaded] = useFonts({
		'meta-normal': require('./assets/fonts/meta-normal.ttf'),
	});

	if (!isLoaded) return <AppLoading />;
	else return <HomeScreen />;
}
