import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faListUl } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setDrawer }) => (
	<Text style={styles.header}>
		<Text style={styles.menu}>
			<TouchableOpacity onPress={() => setDrawer((drawer) => !drawer)}>
				<Text>Gitanjali</Text>
			</TouchableOpacity>
		</Text>
	</Text>
);

const styles = StyleSheet.create({
	header: {
		marginTop: 30,
		marginBottom: 30,
		fontSize: 28,
		fontFamily: 'meta-normal',
		textAlign: 'center',
	},
});

export default Header;
