import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => {
	return <Text style={styles.header}>Gitanjali by Rabindranath Tagore</Text>;
};

const styles = StyleSheet.create({
	header: {
		textAlign: 'center',
		marginTop: 30,
		marginBottom: 30,
		fontSize: 20,
	},
});

export default Header;
