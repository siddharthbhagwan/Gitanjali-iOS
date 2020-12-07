import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Header = ({ setDrawer }) => (
	<TouchableOpacity onPress={() => setDrawer((drawer) => !drawer)}>
		<Text style={styles.header}>Gitanjali</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	header: {
		fontSize: 28,
		marginTop: 70,
		marginBottom: 30,
		textAlign: 'center',
		fontFamily: 'meta-normal',
	},
});

export default Header;
