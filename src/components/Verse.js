import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Verse = ({ verseNo, text }) => (
	<>
		<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
		<Text style={[styles.verse]}>{text}</Text>
		<Text style={styles.verseEnd}></Text>
	</>
);

const styles = StyleSheet.create({
	verse: {
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 40,
		marginRight: 40,
		fontSize: 18,
		fontFamily: 'meta-normal',
		lineHeight: 25,
	},
	verseNo: {
		fontSize: 25,
		textAlign: 'center',
	},
	verseEnd: {
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginLeft: 120,
		marginRight: 120,
		marginTop: 20,
	},
});

export default Verse;
