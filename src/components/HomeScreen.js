import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Sidebar from './Sidebar';

export default HomeScreen = () => {
	const [verseNo, setVerseNo] = useState(1);
	const [drawer, setDrawer] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<Sidebar
				key="sidebar"
				drawer={drawer}
				verseNo={verseNo}
				setDrawer={setDrawer}
				setVerseNo={setVerseNo}
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
