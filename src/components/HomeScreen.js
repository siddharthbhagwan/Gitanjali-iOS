import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { isTablet } from 'react-native-device-detection';
import { StatusBar } from 'expo-status-bar';
import Quote from './Quote';

export default HomeScreen = () => {
	const [verseNo, setVerseNo] = useState(1);
	const [drawer, setDrawer] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>Gitanjali</Text>
			<Quote />
			{/* <Sidebar
				key="sidebar"
				drawer={drawer}
				verseNo={verseNo}
				setDrawer={setDrawer}
				setVerseNo={setVerseNo}
			/>
			<StatusBar style="auto" /> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		marginTop: 50,
		textAlign: 'center',
		fontFamily: 'meta-normal',
		fontSize: isTablet ? 45 : 28,
	},
});
