import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BlurView } from 'expo-blur';

const Verse = ({ verseNo, text }) => (
	<>
		<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
		<Text style={[styles.verse]}>{text}</Text>
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
});

export default Verse;
