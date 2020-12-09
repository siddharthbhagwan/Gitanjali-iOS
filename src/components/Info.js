import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image } from 'react-native';

export default Info = () => {
	return (
		<SafeAreaView style={styles.body}>
			<Image source={require('./../../assets/icon.png')} style={styles.logo} />
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
			<Text style={[styles.infoSection, styles.ig]}>@siddhartha_b</Text>
			<Text style={[styles.infoSection, styles.version]}>v1.0</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '30%',
	},
	ig: {
		marginTop: 5,
	},
	infoSection: {
		fontFamily: 'meta-normal',
	},
	title: {
		fontSize: 30,
		marginTop: 20,
	},
	author: {
		fontSize: 30,
	},
	madeFor: {
		marginTop: 70,
		fontSize: 17,
	},
	madeBy: {
		marginTop: 70,
	},
	version: {
		fontSize: 15,
		marginTop: 5,
	},
	logo: {
		height: 200,
		width: 200,
		marginTop: 50,
	},
});
