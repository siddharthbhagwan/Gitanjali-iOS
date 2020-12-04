import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Header from './src/components/Header.js';
import Verse from './src/components/Verse';
import { StatusBar } from 'expo-status-bar';
import verses from './assets/verses';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import MenuDrawer from 'react-native-side-drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faThLarge } from '@fortawesome/free-solid-svg-icons';

export default function App() {
	const [verseNo, setVerseNo] = useState(1);
	const [drawer, setDrawer] = useState(false);

	const toggleDrawer = () => setDrawer(!drawer);

	const drawerContent = () => {
		const v = Array.from({ length: 10 }, (_, i) => i + 1);

		const verses = v.map((v) => (
			<Text
				onPress={() => {
					setVerseNo(v);
					toggleDrawer();
				}}
				style={styles.verseMenu}
			>
				{v}
			</Text>
		));

		return <TouchableOpacity style={styles.menu}>{verses}</TouchableOpacity>;
	};

	const [isLoaded] = useFonts({
		'meta-normal': require('./assets/fonts/meta-normal.ttf'),
	});

	if (!isLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<MenuDrawer
					open={drawer}
					drawerContent={drawerContent()}
					drawerPercentage={15}
					animationTime={250}
					overlay={true}
					opacity={0.4}
				></MenuDrawer>
				<Header key="Header" toggleDrawer={toggleDrawer} />
				<Verse key="chapters" verseNo={verseNo} text={verses[verseNo]} />
				<StatusBar style="auto" />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	menu: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
		border: '1px solid #dfdfdf',
	},
	verseMenu: {
		fontSize: 18,
		padding: 5,
		borderBottom: '1px solid #dddddd',
		textAlign: 'center',
		fontFamily: 'meta-normal',
	},
});
