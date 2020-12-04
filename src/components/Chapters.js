import React from 'react';
import { StyleSheet, Text } from 'react-native';
import files from '../../assets/chapters.js';

const Chapters = (props) => {
	const chapters = Object.keys(files).map((no) => (
		<>
			<Text style={styles.chapter}>{no}</Text>
			<Text style={styles.chapter}>{files[no]}</Text>
		</>
	));

	return chapters;
};

const styles = StyleSheet.create({
	chapter: {
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 40,
		marginRight: 40,
	},
});

export default Chapters;
