import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Verse = ({ verseNo, text, drawer }) => {
	return (
		<>
			<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
			<Text style={[styles.verse, drawer ? styles.blur : null]}>{text}</Text>
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
	},
	verseNo: {
		fontSize: 25,
		textAlign: 'center',
	},
	blur: { color: 'transparent', textShadow: '0 0 5px #000' },
});

export default Verse;
