import React from 'react';
import { isTablet } from 'react-native-device-detection';
import quotes from '../../assets/quotes';
import { StyleSheet, SafeAreaView, Text, Image } from 'react-native';

const Quote = () => {
	const verse = Math.floor(Math.random() * 103) + 1;
	const line = Math.floor(Math.random() * quotes[verse].length);
	const quote = quotes[verse][line];

	return (
		<SafeAreaView style={styles.body}>
			<Text style={[styles.quote]}>{quote}</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	quote: {
		marginBottom: 15,
		fontFamily: 'meta-normal',
		fontSize: isTablet ? 25 : 18,
		marginTop: isTablet ? 35 : 25,
		lineHeight: isTablet ? 40 : 30,
		marginLeft: isTablet ? '15%' : 40,
		marginRight: isTablet ? '15%' : 40,
	},
});

export default Quote;
