import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

const Verse = ({ verseNo, text }) => (
	<>
		<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
		<ScrollView>
			<Text style={[styles.verse]}>{text}</Text>
			<View style={styles.verseEnd}></View>
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
		marginTop: 10,
		marginBottom: 10,
		borderTopColor: 'lightgray',
		borderTopWidth: 1,
		marginLeft: 120,
		marginRight: 120,
	},
});

export default Verse;
