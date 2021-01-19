import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import HomeScreen from './src/components/HomeScreen';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
	const [splash, setSplash] = useState(true);
	const [isLoaded] = useFonts({
		'meta-normal': require('./assets/fonts/meta-normal.ttf'),
	});

	SplashScreen.preventAutoHideAsync();

	useEffect(
		() =>
			setTimeout(() => {
				SplashScreen.hideAsync();
				setSplash(false);
			}, 1500),
		[]
	);

	if (!isLoaded || splash) return <AppLoading />;
	else return <HomeScreen />;
}
