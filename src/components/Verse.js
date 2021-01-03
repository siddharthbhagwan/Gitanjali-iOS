import React from 'react';
import { isTablet } from 'react-native-device-detection';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

const Verse = ({ verseNo, text, setDrawer }) => {
	const closeDrawer = () =>
		setDrawer((drawer) => (drawer ? setDrawer(false) : null));

	return (
		<TouchableOpacity onPress={closeDrawer} activeOpacity={1}>
			<Text style={[styles.verse, styles.verseNo]}>{verseNo}</Text>
			<ScrollView>
				<Text style={[styles.verse]}>{text}</Text>
				<View style={styles.verseEnd}></View>
			</ScrollView>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	verse: {
		marginBottom: 15,
		fontFamily: 'meta-normal',
		fontSize: isTablet ? 25 : 18,
		marginTop: isTablet ? 35 : 25,
		lineHeight: isTablet ? 40 : 25,
		marginLeft: isTablet ? '15%' : 40,
		marginRight: isTablet ? '15%' : 40,
	},
	verseNo: {
		fontSize: isTablet ? 32 : 25,
		textAlign: 'center',
	},
	verseEnd: {
		borderTopWidth: 1,
		borderTopColor: 'lightgray',
		marginTop: isTablet ? 10 : '25%',
		marginLeft: isTablet ? '25%' : 120,
		marginRight: isTablet ? '25%' : 120,
		marginBottom: isTablet ? '10%' : 30,
	},
});

export default Verse;
