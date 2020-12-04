import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Verse = ({ verseNo, text }) => {
	return (
		<>
			<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
			<Text style={styles.verse}>{text}</Text>
		</>
	);
};

const styles = StyleSheet.create({
	verse: {
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 40,
		marginRight: 40,
		fontSize: 18,
		fontFamily: 'meta-normal',
		lineHeight: 25,
		filter: blur('2px'),
	},
	verseNo: {
		fontSize: 25,
	},
});

export default Verse;