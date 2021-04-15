import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import { isTablet } from 'react-native-device-detection';
import quotes from '../../assets/quotes';
import Actions from './Actions';

const Quote = () => {
	const getRandomNo = (limit) => Math.floor(Math.random() * limit) + 1;
	const refresh = () => setVerse(getRandomNo(103));

	const [verse, setVerse] = useState(getRandomNo(103));
	const line = Math.floor(Math.random() * quotes[verse].length);
	const quote = quotes[verse][line];

	return (
		<SafeAreaView style={styles.body}>
			<ScrollView>
				<Text style={[styles.quote]}>{quote}</Text>
			</ScrollView>
			<Actions refresh={refresh} />
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
		display: 'flex',

		marginBottom: 15,
		fontFamily: 'meta-normal',
		fontSize: isTablet ? 25 : 18,
		marginTop: isTablet ? 35 : 25,
		paddingTop: isTablet ? 35 : 25,
		lineHeight: isTablet ? 40 : 30,
		marginLeft: isTablet ? '15%' : 40,
		marginRight: isTablet ? '15%' : 40,
	},
});

export default Quote;
