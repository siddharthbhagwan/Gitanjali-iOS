import React from 'react';
import { isTablet } from 'react-native-device-detection';
import quotes from '../../assets/quotes';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const Actions = ({ refresh }) => {
	return (
		<SafeAreaView style={styles.body}>
			<Text style={[styles.actions]} onPress={() => refresh()}>
				Refresh
			</Text>
			<Text style={[styles.actions]}>Lookup</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	actions: {
		flexGrow: 1,
		padding: 20,
		marginBottom: 15,
		textAlign: 'center',
		fontFamily: 'meta-normal',
		fontSize: isTablet ? 25 : 18,
	},
});

export default Actions;
