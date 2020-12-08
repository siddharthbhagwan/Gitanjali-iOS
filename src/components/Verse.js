import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const Verse = ({ verseNo, text }) => (
	<>
		<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
		<ScrollView>
			<Text style={[styles.verse]}>{text}</Text>
			<Text style={styles.verseEnd}></Text>
		</ScrollView>
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
		borderBottomColor: 'red',
		borderBottomWidth: 2,
		// marginLeft: 120,
		// marginRight: 120,
		// marginTop: 20,
	},
});

export default Verse;
