import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default Info = () => {
	return (
		<SafeAreaView style={styles.body}>
			<Text style={[styles.infoSection, styles.title]}>Gitanjali</Text>
			<Text style={[styles.infoSection]}>by</Text>
			<Text style={[styles.infoSection, styles.author]}>
				Rabindranath Tagore
			</Text>
			<Text style={[styles.infoSection, styles.madeFor]}>
				Made with love for Nishant & Pratik
			</Text>
			<Text style={[styles.infoSection, styles.madeBy]}>
				siddharthabhagwan@gmail.com
			</Text>
			<Text style={[styles.infoSection, styles.version]}>v1.0</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 140,
	},
	infoSection: {
		fontFamily: 'meta-normal',
	},
	title: {
		fontSize: 30,
	},
	author: {
		fontSize: 30,
	},
	madeFor: {
		marginTop: 70,
		fontSize: 17,
	},
	madeBy: {
		marginTop: 50,
	},
	version: {
		fontSize: 15,
	},
});
