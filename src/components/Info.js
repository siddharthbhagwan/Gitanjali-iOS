import React from 'react';
import { isTablet } from 'react-native-device-detection';
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
		marginBottom: '30%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	infoSection: {
		fontFamily: 'meta-normal',
	},
	title: {
		fontSize: isTablet ? 40 : 30,
		marginTop: isTablet ? 30 : 20,
	},
	author: {
		fontSize: isTablet ? 40 : 30,
	},
	madeFor: {
		marginTop: isTablet ? 100 : 70,
		fontSize: isTablet ? 25 : 17,
	},
	madeBy: {
		fontSize: isTablet ? 22 : 20,
		marginTop: isTablet ? 100 : 70,
	},
	ig: {
		fontSize: isTablet ? 20 : 15,
		marginTop: isTablet ? 10 : 5,
	},
	version: {
		fontSize: isTablet ? 20 : 15,
		marginTop: isTablet ? 10 : 5,
	},
	logo: {
		height: isTablet ? 350 : 200,
		width: isTablet ? 350 : 200,
		marginTop: isTablet ? 70 : 50,
	},
});
