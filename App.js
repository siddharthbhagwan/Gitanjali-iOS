import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header.js';
// import Footer from './src/components/Footer.js';
import Verse from './src/components/Verse';
import { StatusBar } from 'expo-status-bar';
import verses from './assets/verses';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Sidebar from './src/components/Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faListUl, faThLarge } from '@fortawesome/free-solid-svg-icons';

export default function App() {
	const [verseNo, setVerseNo] = useState(2);
	const [drawer, setDrawer] = useState(false);

	const [isLoaded] = useFonts({
		'meta-normal': require('./assets/fonts/meta-normal.ttf'),
	});

	if (!isLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<Sidebar
					key="sidebar"
					drawer={drawer}
					verseNo={verseNo}
					setDrawer={setDrawer}
					setVerseNo={setVerseNo}
				/>
				<Header
					key="header"
					drawer={drawer}
					setDrawer={setDrawer}
					setVerseNo={setVerseNo}
				/>
				<Verse key="chapters" verseNo={verseNo} text={verses[verseNo]} />
				{/* <Footer setVerseNo={setVerseNo} verseNo={verseNo} /> */}
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
});
